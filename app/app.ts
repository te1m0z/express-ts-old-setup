import 'dotenv/config'
import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'

import cors from './config/cors'
// import Routes from './interfaces/routes.interface'
import router from './routes'

class App {
	public app: express.Application
	public port: number
	public host: string
	public env: string
	public static path: string = path.resolve(__dirname)

	// routes: Routes[]
	constructor() {
		this.app = express()
		this.port = Number(process.env.SERVER_PORT)
		this.host = process.env.SERVER_HOST || 'localhost'
		this.env = process.env.NODE_ENV || 'development'

		this.init()
	}

	public listen() {
		this.app.listen(this.port, this.host, (): void => {
			console.log(`Start at https://localhost:${this.port}/`)
		})
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
		this.app.disable('x-powered-by')
	}
}

export default App
