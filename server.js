'use strict'

/** Импорт модулей Node.js */
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

/** Импорт модулей приложения */
const router = require('./routes/index')

const authErrorhandler = require('./errors/auth/auth-error-handler')

process.env.NODE_ENV = 'production'

const app = express()
const port = process.env.SERVER_PORT

app.use(
	cors({
		origin: 'http://localhost:8080'
	})
)
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public/dist'))

app.use('/api', router)

app.use(authErrorhandler)

try {
	app.listen(port, 'localhost', () => {
		console.log(`Express server is working on localhost : ${port}`)
	})
} catch (error) {
	console.log('Express server has crashed with error: ', error.message)
}
