const swag = require('./../models/swag');

var categories = ['hats', 'shirts', 'jackets', 'sweaters', 'pants', 'shorts'];

module.exports = {
    search: (req, res, next) => {
        if (!req.query.category || !categories.includes(req.query.category) ) {
            res.status(200).send(swag);
        }
        else if ( categories.includes(req.query.category) ) {
            var filtered = swag.filter( product => { return product.category == req.query.category } );
            res.status(200).send(filtered);
        }
    }
}