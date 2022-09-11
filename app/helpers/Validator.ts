import { Request } from 'express'
import { IPromiseApiResponse } from '../interfaces/auth/IPromise'

/**
 * Метод проверки наличия свойств в объекте Request
 */
export const checkReqBody = (request: Request, data: string[]): Promise<IPromiseApiResponse> => {
	const valid: boolean = data.every((field) => request.body[field] && request.body[field] !== '')

	return new Promise((resolve, reject) => {
		if (valid) {
			const entries = new Map(data.map(field => [field, request.body[field]]))
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
				answer: {
					message: 'Все поля должны быть заполнены'
				}
			})
		}
	})
}
