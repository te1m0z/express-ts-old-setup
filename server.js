'use strict'

/** Импорт модулей Node.js */
require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')

/** Импорт написанных модулей для приложения */
const router = require('./routes/index')
const cors = require('./config/cors')

/** Импорт вспомогательный модулей */
const authErrorhandler = require('./errors/auth/auth-error-handler')

// process.env.NODE_ENV = 'production'

const app = express()

app.use(cors)
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public/dist'))

/** Установка роутера */
app.use('/api', router)

/** Установка обработчиков ошибок / логирования и тп. */
app.use(authErrorhandler)

/** Попытка запустить сервер */
try {
	app.listen(process.env.SERVER_PORT, 'localhost', () => {
		console.log(
			`Express server is working on localhost : ${process.env.SERVER_PORT}`
		)
	})
} catch (error) {
	console.log('Express server has crashed with error: ', error.message)
}
