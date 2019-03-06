const jwt = require('jsonwebtoken')
const secrets = require('../secrets/secret')

module.exports = (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({message: "The way is shut"})
            } else {
                req.decodedJwt = decodedToken
                next()
            }
        })
    } else {
        res.status(401).json({ message: "The way is shut"})
    }
}