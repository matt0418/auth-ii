const router = require('express').Router()

const Users = require('./helperFunctions')


const theWayIsShut = require('../auth/middleware')
const checkDepartment = require('../auth/checkrole')

router.get('/', theWayIsShut, async (req, res) => {
    try {
        const users = await Users.find()
        let modified = []
        for (i =0; i < users.length; i++) {
            if (users[i].department === req.decodedJwt.department) {
                modified.push(users[i])
            }
        }
        console.log(users.length)
        res.status(200).json(modified)
    } catch(error) {
        console.log(error)
        res.status(500).json(error)
    }
})

module.exports = router