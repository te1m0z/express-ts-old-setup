import { IRouter, Router } from 'express'

import usersRouter from './users'
import postsRouter from './posts'

const apiRouter: IRouter = Router()

apiRouter.use('/users', usersRouter)
apiRouter.use('/posts', postsRouter)

export default apiRouter
