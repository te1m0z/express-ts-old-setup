import { IRouter, Router, Request, Response, NextFunction, Send } from 'express'

import usersRouter from './users'
// const postsRouter = require('./posts/posts')
// const categoriesRouter = require('./categories/categories')

const apiRouter: IRouter = Router()

apiRouter.use('/users', usersRouter)
// apiRouter.use('/posts', postsRouter)
// apiRouter.use('/categories', categoriesRouter)

export default apiRouter
