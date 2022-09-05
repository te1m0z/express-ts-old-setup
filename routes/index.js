const { Router } = require('express')

const usersRouter = require('./users/users')
// const postsRouter = require('./posts/posts')
// const categoriesRouter = require('./categories/categories')

const apiRouter = Router()

apiRouter.use('/users', usersRouter)
// apiRouter.use('/posts', postsRouter)
// apiRouter.use('/categories', categoriesRouter)

module.exports = apiRouter
