const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

const cfs = require('./middlewares/checkForSession');
const swagController = require('./controllers/swagController');
const authController = require('./controllers/authController');


// =========== MIDDLEWARE =============
app.use(bodyParser.json());
app.use(session({
    secret: '83y98roihaejnd5r6tyg3hewds90iojk4rewfsdtyughj23eqwdyiuh',
    resave: false,
    saveUninitialized: true
}));
app.use(cfs);

// ============= ENDPOINTS ============
app.get('/api/swag', swagController.read);
app.post('/api/login', authController.login);
app.post('/api/register', authController.register);
app.post('/api/signout', authController.signout);
app.get('/api/user', authController.getUser);



app.listen(3000, () => {
    console.log("Listening on port 3000");
});