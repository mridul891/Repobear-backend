const accessMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')[1];
    req.token = token;
    next();
}

module.exports = {accessMiddleware}