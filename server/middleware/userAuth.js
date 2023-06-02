const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // Expecting 'Bearer TOKEN'
        const decodedToken = jwt.verify(token, 'secret_key'); 
        req.userId = decodedToken.userId;
        next();
    } 
    catch {
        res.status(401).json({
            message: 'Auth failed!'
        });
    }
};
