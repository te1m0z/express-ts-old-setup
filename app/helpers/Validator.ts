import { Request } from 'express'
import { IPromiseApiResponse } from '../interfaces/auth/IPromise'

// export class Validator {
// 	/**
// 	 * Метод проверки наличия свойств в объекте Request
// 	 */
// 	public static checkRequestBody(request: Request, data: string | string[]): Promise<IPromiseApiResponse> {
// 		let valid = false
//
// 		if (Array.isArray(data)) {
// 			valid = data.every((field) => request.body[field] && request.body[field] !== '')
// 		}
//
// 		if (typeof data === 'string') {
// 			valid = request.body[data] && request.body[data] !== ''
// 		}
//
// 		return new Promise((resolve, reject) => {
// 			if (valid) {
// 				return resolve({
// 					status: true,
// 					answer: {
// 						message: 'Данные для запроса есть'
// 					}
// 				})
// 			} else {
// 				return reject({
// 					status: false,
// 					handler: 'badRequest',
// 					answer: {
// 						message: 'Все поля должны быть заполнены'
// 					}
// 				})
// 			}
// 		})
// 	}
// }


/**
 * Метод проверки наличия свойств в объекте Request
 */
export const checkReqBody = (request: Request, data: string[]): Promise<IPromiseApiResponse> => {

	const valid: boolean = data.every((field) => request.body[field] && request.body[field] !== '')

	return new Promise((resolve, reject) => {

		if (valid) {

			const entries = new Map(data.map(field => [field, request.body[field]]))

			// console.log(entries)

			return resolve({
				status: true,
				answer: {
					message: 'Данные для запроса есть',
					data: Object.fromEntries(entries)
				}
			})
		} else {
			return reject({
				status: false,
				// handler: 'badRequest',
				answer: {
					message: 'Все поля должны быть заполнены'
				}
			})
		}
	})
}
