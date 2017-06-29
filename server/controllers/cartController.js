const swag = require('./../models/swag');

module.exports = {
    add: (req, res, next) => {
        if (req.query.id) {
            if (req.session.user.cart.find( product => {return product.id == req.query.id} )) {
                res.status(200).send(req.session.user);
            }
            else {
                var product = swag.find( product => {
                    return product.id == req.query.id
                } );

                req.session.user.cart.push(product);
                req.session.user.total += product.price;
                res.status(200).send(req.session.user);
            }
        }
    },
    delete: (req, res, next) => {
        if (req.query.id) {
            for (var i = 0; i < req.session.user.cart.length; i++) {
                if (req.query.id === req.session.user.cart[i]) {
                    req.session.user.cart.splice(i, 1);
                    res.status(200).send(req.session.user);
                }
                else {
                    res.status(200).send(req.session.user);
                } 
            }
        }
    },
    checkout: (req, res, next) => {
        req.session.user.cart = [];
        req.session.user.total = 0;
        res.status(200).send(req.session.user);
    }
}