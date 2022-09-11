import { ErrorRequestHandler as Error, NextFunction as Next, Request, Response } from 'express'

export const appErrorHandler = (error: Error, request: Request, response: Response, next: Next) => {

	/** Если это ошибка авторизации */
	// if (error instanceof AuthError) {
	// }
	return response.json(error)

	// response.status(500).json('something went wrong')
}
