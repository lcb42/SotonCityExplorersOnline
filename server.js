const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 80;

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authMiddleware = require('./middleware/auth-middleware');

app.use(express.static(path.join(__dirname, 'client/build')));

// == BACKEND UTILITIES ==
// For all backend utilities create a sub router that deals with those request

// Express middleware that allows POSTing data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use the cookie-parser to help with auth token,
// it must come before the customAuthMiddleware
app.use(cookieParser());
app.use(authMiddleware);


// -- Authentication --
const authRouter = require('./routes/auth')
app.use('/api/auth', authRouter);

const unitRouter = require('./routes/unit')
app.use('/api/unit', unitRouter);

// == FRONT-END UTILITIES ==
// This has to be the last get and redirects anything not already routed to the react front-end
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

