require('dotenv').config()
const env = process.env
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const usersRouter = require('./routes/user.js')
const categoriesRouter = require('./routes/categories.js')
const postsRouter = require('./routes/posts.js')
const { initDB } = require('./database.js')

const loginErrorhandler = require('./errors/login/login-error-handler')

process.env.NODE_ENV = 'prodcution'

/* Constants */
const app = express()
const port = env.SERVER_PORT

/* Express settings */
app.use(
	cors({
		origin: 'http://localhost:8080'
	})
)
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public/dist'))

/* API routes */
app.use('/api/user', usersRouter)
app.use('/api/categories', categoriesRouter)
app.use('/api/posts', postsRouter)

/* Error handling */
app.use(loginErrorhandler)

/* Start server listening */
app.listen(port, () => {
	console.log(`Express server is working on localhost : ${port}`)
})

module.exports = app
