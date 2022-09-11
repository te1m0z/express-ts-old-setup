import { NextFunction as Next, Request, Response } from 'express'
import { ApiResponseError } from '../interfaces/ApiResponse'
import { checkExistCookies } from '../helpers/Cookies'
import { checkToken } from '../helpers/JWT'

export abstract class PostsController {

	/**
	 * Метод получения всех записей
	 * @param req
	 * @param res
	 * @param next
	 */
	static getAll(req: Request, res: Response, next: Next): void {

		checkExistCookies(req, ['token'])
			.then((result) => checkToken(result.answer.data))
			.then((result) => res.json(result))
			.catch((err: ApiResponseError) => next(err))
	}
}
