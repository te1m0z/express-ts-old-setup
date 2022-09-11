import { Request, Response } from 'express'
import { ApiResponse } from '../interfaces/ApiResponse'
import { IPromiseApiResponse } from '../interfaces/auth/IPromise'

export const setCookies = (res: Response, data, result): Promise<ApiResponse> => {

	const entries: string[] = Object.keys(data)

	entries.forEach(field => res.cookie(field, data[field]))

	return Promise.resolve(result)
}


export const checkExistCookies = (request: Request, data: string[]): Promise<IPromiseApiResponse> => {

	const exists: boolean = data.every((field) => request.cookies[field] && request.cookies[field] !== '')

	return new Promise((resolve, reject) => {

		if (exists) {

			const entries = new Map(data.map(field => [field, request.cookies[field]]))

			return resolve({
				status: true,
				answer: {
					message: 'Данные Cookies есть',
					data: Object.fromEntries(entries)
				}
			})
		} else {
			return reject({
				status: false,
				answer: {
					message: 'Данных не хватает'
				}
			})
		}
	})
}