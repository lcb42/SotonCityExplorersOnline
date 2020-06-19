'use strict';

const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    const Member = sequelize.define('Member', {
        username: DataTypes.STRING,
        passwordHash: DataTypes.STRING,
        emoji: DataTypes.STRING,
        leader: DataTypes.BOOLEAN
    }, {});
    Member.associate = function (models) {
        Member.belongsTo(models.Unit);
        Member.hasMany(models.Point);
        Member.hasMany(models.Attendance);
        Member.hasMany(models.LoginAttempt);
        Member.hasMany(models.AuthToken)
    };

    // This is a class method, it is not called on an individual
    // user object, but rather the class as a whole.
    // e.g. Member.authenticate('user1', 'password1234')
    Member.authenticate = async function (username, password) {

        const user = await Member.findOne({where: {username}});

        console.log (user.passwordHash);

        // bcrypt is a one-way hashing algorithm that allows us to 
        // store strings on the database rather than the raw
        // passwords. Check out the docs for more detail
        if (bcrypt.compareSync(password, user.passwordHash)) {
            return user.authorize();
        }

        throw new Error('invalid password');
    }

    // In order to define an instance method, we have to access
    // the Member model prototype. This can be found in the
    // sequelize documentation
    Member.prototype.authorize = async function () {
        const {AuthToken} = sequelize.models;
        const user = this

        // Create a new auth token associated to 'this' user
        // by calling the AuthToken class method we created earlier
        // and passing it the user id
        const authToken = await AuthToken.generate(this.id);

        // addAuthToken is a generated method provided by
        // sequelize which is made for any 'hasMany' relationships
        await user.addAuthToken(authToken);

        return {user, authToken}
    };

    Member.prototype.logout = async function (token) {
        // Destroy the auth token record that matches the passed token
        sequelize.models.AuthToken.destroy({where: {token}});
    };

    return Member;
};