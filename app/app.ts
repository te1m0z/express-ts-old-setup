import 'dotenv/config'
import express, { Application as IApplication } from 'express'
import cookieParser from 'cookie-parser'

import cors from './config/cors'
import router from './routes'
import { createLogger, format, transports } from 'winston'
import { appErrorLogger } from './errors/error-logger'
import { appErrorHandler } from './errors/error-handler'

export class App {
	public readonly app: IApplication
	public readonly port: number
	public readonly host: string
	public readonly env: string
	public logger: any

	constructor() {
		this.app = express()
		this.port = process.env.SERVER_PORT ? +process.env.SERVER_PORT : 9000
		this.host = process.env.SERVER_HOST || 'localhost'
		this.env = process.env.NODE_ENV || 'development'

		this.initLogger()
		this.setup()
		this.setRouters()
		this.setErrorsHandlers()
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

	private setup() {
		this.app.use(cors)
		this.app.use(cookieParser())
		this.app.use(express.json())
		this.app.use(express.urlencoded({ extended: true }))
		this.app.use(express.static('public/dist'))
		this.app.disable('x-powered-by')
	}

	private setRouters() {
		this.app.use('/api', router)
	}

	private setErrorsHandlers() {
		this.app.use(appErrorLogger)
		this.app.use(appErrorHandler)
	}

	private initLogger() {

		const currentDate: string = new Date().toLocaleDateString('ru').replaceAll('.', '-')

		this.logger = createLogger({
			transports: [
				new transports.Console(),
				new transports.File({
					dirname: 'logs',
					filename: `app-logs-${currentDate}.log`
				})
			],
			format: format.combine(
				format.colorize(),
				format.timestamp(),
				format.printf(({ timestamp, level, message }) => `[${timestamp}] ${level}: ${message}`)
			)
		})
	}

	getLogger() {
		return this.logger
	}
}
