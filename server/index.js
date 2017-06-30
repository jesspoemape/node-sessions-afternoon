const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

const cfs = require('./middlewares/checkForSession');
const swagController = require('./controllers/swagController');
const authController = require('./controllers/authController');
const cartController = require('./controllers/cartController');
const searchController = require('./controllers/searchController');


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
app.get('/api/users', authController.getUsers);

app.post('/api/cart/add', cartController.add);
app.post('/api/cart/checkout', cartController.checkout);
app.delete('/api/cart/delete', cartController.delete);

app.get('/api/search', searchController.search);



app.listen(3000, () => {
    console.log("Listening on port 3000");
});