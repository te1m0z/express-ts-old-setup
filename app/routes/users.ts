import { IRouter, Router } from 'express'
import { AuthController } from '../controllers/AuthController'

const usersRouter: IRouter = Router()

// @ts-ignore
usersRouter.post('/login', AuthController.login)

export default usersRouter
