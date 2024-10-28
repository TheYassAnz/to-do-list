const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        // Get the token from the headers
        const token = req.headers.authorization.split(" ")[1];
        // Decode the token
        const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
        // Get the user ID from the token
        req.auth = {
            userId: decodedToken.userId,
        };
        next();
    } catch (error) {
        res.status(401).json({ error });
    }
};
