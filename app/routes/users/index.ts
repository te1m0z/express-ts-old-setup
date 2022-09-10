import { IRouter, Router } from 'express'
import { AuthController } from '../../controllers/auth/AuthController'

const usersRouter: IRouter = Router()

usersRouter.post('/login', AuthController.login)

export default usersRouter
