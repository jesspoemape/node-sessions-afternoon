const users = require('./../models/users');

var id = 1;

module.exports = {
    login: (req, res, next) => {

        var user = users.find( user =>  req.body.username === user.username && req.body.password === user.password);

        if (user) {
            req.session.user.username = req.body.username;
            res.status(200).send(req.session.user);
        }
        else {
            res.status(500).send("Invalid username or password");
        }
    },
    register: (req, res, next) => {
        if (req.body.username && req.body.password) {
            users.push({
                id: id++,
                username: req.body.username,
                password: req.body.password
            });
            req.session.user.username = req.body.username;
            res.status(200).send(req.session.user);
        }
    },
    signout: (req, res, next) => {
        req.session.destroy();
        res.send(req.session);
    },
    getUser: (req, res, next) => {
        res.status(200).send(req.session.user);
    },
    getUsers: (req, res, next) => {
        res.send(users);
    }
}