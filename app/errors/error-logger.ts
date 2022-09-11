import { ErrorRequestHandler, NextFunction as Next, Request, Response } from 'express'
import { app } from '../server'

export const appErrorLogger = (err: ErrorRequestHandler, req: Request, res: Response, next: Next) => {
	app.getLogger().log({
		level: 'error',
		message: JSON.stringify(err)
	})
	next(err)
}
