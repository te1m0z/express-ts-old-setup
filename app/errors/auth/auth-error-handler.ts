import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'

export const authErrorHandler = (
	error: ErrorRequestHandler,
	request: Request,
	response: Response,
	next: NextFunction
) => {

	/** Если это ошибка авторизации */
	// if (error instanceof AuthError) {
	// }
	return response.json(error)

	// response.status(500).json('something went wrong')
}
