const router = require('express').Router()

const Users = require('./helperFunctions')


const theWayIsShut = require('../auth/middleware')

router.get('/', theWayIsShut, async (req, res) => {
    try {
        const users = await Users.find()
        res.status(200).json(users)
    } catch(error) {
        console.log(error)
        res.status(500).json(error)
    }
})

module.exports = router