const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('../auth/authRouter')
const userRouter = require('../userRoutes/userRoutes')
const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/api/auth', authRouter)
server.use('/api/users', userRouter)

server.get('/', (req, res) => {
    res.send('we workin')
})

module.exports = server