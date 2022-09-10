import 'dotenv/config'
import express from 'express'
import cookieParser from 'cookie-parser'

import cors from './config/cors'
import router from './routes'
import { authErrorHandler } from './errors/auth/auth-error-handler'

export class App {
	public app: express.Application
	public port: number
	public host: string
	public env: string

	// routes: Routes[]
	constructor() {
		this.app = express()
		this.port = Number(process.env.SERVER_PORT)
		this.host = process.env.SERVER_HOST || 'localhost'
		this.env = process.env.NODE_ENV || 'development'

		this.init()
	}

	public listen() {
		try {
			this.app.listen(this.port, this.host, (): void => {
				console.log(`Start at https://localhost:${this.port}/`)
			})
		} catch (err: any) {
			console.log('Error on start server: ', err.message)
		}
	}

	public getServer() {
		return this.app
	}

	private init() {
		this.app.use(cors)
		this.app.use(cookieParser())
		this.app.use(express.json())
		this.app.use(express.urlencoded({ extended: true }))
		this.app.use(express.static('public/dist'))
		this.app.use('/api', router)
		this.app.use(authErrorHandler)
		this.app.disable('x-powered-by')
	}
}
