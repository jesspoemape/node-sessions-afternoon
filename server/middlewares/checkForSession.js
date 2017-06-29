module.exports = function (req, res, next) {
    if (!req.session.user) {
        res.session.user = {username: '', cart: [], total: 0}
    }
    else {
        next();
    }
}