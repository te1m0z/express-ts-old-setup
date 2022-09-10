import { IPromiseApiResponse } from '../interfaces/auth/IPromise'
import { User } from '../interfaces/User'
import knex from '../database/connection'
import bcrypt from 'bcrypt'

type ICredentials = {
	login: string
	password: string
}

export const compareCredentials = async ({ login, password }: ICredentials): Promise<IPromiseApiResponse> => {

	if (!login || !password) {
		return Promise.reject({
			status: false,
			// handler: 'badRequest',
			answer: {
				message: 'Все поля должны быть заполнены'
			}
		})
	}

	const user: User | undefined = await knex<User>('users').where('login', login).first()

	if (!user) {
		return Promise.reject({
			status: false,
			// handler: 'badRequest',
			answer: {
				message: 'Неправильный логин или пароль'
			}
		})
	}

	return new Promise((resolve, reject) => {
		if (bcrypt.compareSync(password, user.password)) {
			resolve({
				status: true,
				answer: {
					message: 'Вы успешно вошли',
					data: {
						id: user.id,
						login: user.login
					}
				}
			})
		} else {
			reject({
				status: false,
				// handler: 'badRequest',
				answer: { message: 'Неправильный логин или пароль' }
			})
		}
	})
}
