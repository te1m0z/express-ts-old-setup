import { ErrorRequestHandler, NextFunction as Next, Request, Response } from 'express'
import { app } from '../server'

export const loggerMiddleware = (err: ErrorRequestHandler, req: Request, res: Response, next: Next) => {
	app.getLogger().log({
		level: 'error',
		message: JSON.stringify(err)
	})
	next(err)
}
