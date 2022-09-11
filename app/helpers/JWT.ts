import { IPromiseApiResponse } from '../interfaces/auth/IPromise'
import jwt from 'jsonwebtoken'

export const checkToken = ({ token }: { token: string }): Promise<IPromiseApiResponse> => {
	return new Promise((resolve, reject) => {
		if (jwt.verify(token)) {
			return resolve({
				status: true,
				answer: {
					message: 'Токен действителен',
					data: {
						token
					}
				}
			})
		} else {
			return reject({
				status: false,
				answer: {
					message: 'Токен не действителен'
				}
			})
		}
	})
}