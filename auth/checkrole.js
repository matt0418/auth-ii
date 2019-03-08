//middleware

const Users = require('../userRoutes/helperFunctions')

// module.exports = department => {
//     return function(req, res, next) {
//         console.log(department)
//         if (req.decodedJwt.department && req.decodedJwt.department.includes(department)) {
//             next()
//         } else {
//             return res.status(403).json({message: 'cant touch this' })
//         }
//     }
// }

module.exports = () => {
    return function(req, res, next) {
        console.log(req)
    }
}