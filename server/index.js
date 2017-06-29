const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: '83y98roihaejnd5r6tyg3hewds90iojk4rewfsdtyughj23eqwdyiuh',
    resave: false,
    saveUninitialized: true
}));

app.listen(3000, () => {
    console.log("Listening on port 3000");
});