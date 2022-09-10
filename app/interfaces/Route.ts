import { IRouter } from 'express'

interface Route {
	path: string
	router: IRouter
}

export default Route
