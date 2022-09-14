import { NextFunction as Next, Request } from 'express'
import { IPromisedResponse as Response } from '../interfaces/IResponsePromise'
import { ApiResponse, ApiResponseError } from '../interfaces/ApiResponse'

const handleResponse = (res, data) => res.status(200).json(data)
const handleError    = (res, err) => res.status(500).send({ error: 'ошибка 111' })


export const promiseMiddleware = () => {

	return (req: Request, res: Response, next: Next) => {

		res.promise = (p: object): Promise<ApiResponse> => {

			/**
			 * Если пришёл промис
			 */
			// if (p.then && p.catch) {
			// 	return p
			// }

			// if (typeof p === 'object') {
			//
			// }

			// let promiseToResolve
			//
			// if (p.then && p.catch) {
			// 	promiseToResolve = p
			// } else if (typeof p === 'function') {
			// 	promiseToResolve = Promise.resolve().then(() => p())
			// } else {
			// 	promiseToResolve = Promise.resolve(p)
			// }

			return Promise.resolve(p)
				.then((data) => handleResponse(res, data))
				.catch((e) => handleError(res, e))
		}
	}
}
