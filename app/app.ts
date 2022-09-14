import 'dotenv/config'
import express, { Application as IApplication } from 'express'
import cookieParser from 'cookie-parser'
import { Logger } from 'winston'

/** configuration modules */
import cors from './config/cors'
import { env, host, port } from './config/_server'
import { winstonLogger as initedLogger } from './config/winston'

/** another necessary modules */
import AppRouter from './routes/AppRouter'

/** middlewares */
import { loggerMiddleware } from './middlewares/LoggerMiddleware'
import { errorMiddleware } from './middlewares/ErrorMiddleware'
import { promiseMiddleware } from './middlewares/PromiseMiddleware'

export type IApp = {
	logger: Logger;
	listen: () => void;
	getLogger: () => Logger;
};

/**
 * Главный класс приложения
 */
export class App implements IApp {
	private readonly app: IApplication
	private readonly port: number
	private readonly host: string
	private readonly env: string

	public logger: Logger

	constructor() {
		this.app  = express()
		this.port = port
		this.host = host
		this.env  = env

		this.logger = this.initLogger()

		this.setup()
		this.setRouters()
		this.setErrorsHandlers()
	}

	public listen(): void {
		try {
			this.app.listen(this.port, this.host, (): void => {
				console.log(`Сервер запущен на https://localhost:${this.port}/`)
			})
		} catch (err: any) {
			this.logger.log('error', 'Ошибка при запуске сервера: ' + err.message)
		}
	}

	private setup(): void {
		this.app.use(cors)
		this.app.use(cookieParser())
		this.app.use(express.json())
		this.app.use(express.urlencoded({ extended: true }))
		// @ts-ignore
		this.app.use(promiseMiddleware())
		this.app.disable('x-powered-by')
	}

	private setRouters(): void {
		this.app.use('/api', AppRouter)
	}

	private setErrorsHandlers(): void {
		this.app.use(loggerMiddleware)
		this.app.use(errorMiddleware)
	}

	private initLogger(): Logger {
		return initedLogger
	}

	public getLogger(): Logger {
		return this.logger
	}
}
