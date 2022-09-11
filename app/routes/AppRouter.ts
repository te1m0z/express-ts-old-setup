import { IRouter, Router } from 'express'

import usersRouter from './users'
import postsRouter from './posts'

const AppRouter: IRouter = Router()

AppRouter.use('/users', usersRouter)
AppRouter.use('/posts', postsRouter)

export default AppRouter
