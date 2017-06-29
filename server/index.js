const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("Listening on port 3000");
});