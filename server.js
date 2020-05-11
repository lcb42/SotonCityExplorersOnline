const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, 'client/build')));

// == BACKEND UTILITIES ==
// For all backend utilities create a sub router that deals with those request

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

