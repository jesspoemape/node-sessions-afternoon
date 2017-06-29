const users = require('./../models/users');

var id = 1;

module.exports = {
    login: (req, res, next) => {
        for (var i = 0; i < users.length; i++) {
            if (req.body.username === users[i].username && req.body.password === users[i].password) {
                req.session.user.username = req.body.username;
                res.status(200).send(req.session.user);
            }
            res.status(500);
        }
    },
    register: (req, res, next) => {

    },
    signout: (req, res, next) => {

    },
    getUser: (req, res, next) => {

    }
}