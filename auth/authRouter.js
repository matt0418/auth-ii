const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const secrets = require('../secrets/secret')
const Users = require('../userRoutes/helperFunctions')

router.post('/register', async (req, res) => {
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 12)
    user.password = hash
    try {
        const newUser = await Users.add(user)
        res.status(201).json(newUser)
    } catch(error) {
        console.log(error)
        res.status(500).json({message: "you did an oopsie"})
    }
    
})

router.post('/login', async (req, res) => {
    let {username, password} = req.body

    if (username && password) {
        try {
            const loggedIn = await Users.findBy({ username }).first()
            if (loggedIn && bcrypt.compareSync(password, loggedIn.password)) {
                const token = generateToken(loggedIn)

                res.status(200).json({
                    message: `Hi ${loggedIn.username}`,
                    token
                })
            } else {
                res.status(401).json({ message: 'nope' })
            }
        } catch(error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
})

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        department: user.department
    }
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, secrets.jwtSecret, options)
}


module.exports = router