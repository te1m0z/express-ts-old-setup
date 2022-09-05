const { Router } = require('express')
const AuthController = require('../../controllers/auth/AuthController')

const usersRouter = Router()

usersRouter.post('/login', AuthController.login)

module.exports = usersRouter
