import { IPromiseApiResponse } from '../interfaces/auth/IPromise'
import { IUser } from '../interfaces/User'
import { UserRepository } from '../repositories/UserRepository'

type ICredentials = {
	login: string
	password: string
}

export const compareCredentials = async ({ login, password }: ICredentials): Promise<IPromiseApiResponse> => {

	if (!login || !password) {
		return Promise.reject({
			status: false,
			answer: {
				message: 'Все поля должны быть заполнены'
			}
		})
	}

	const user: IUser | boolean = await UserRepository.checkExists(login)

	if (user) {
		return Promise.resolve({
			status: true,
			answer: {
				message: 'Вы успешно вошли',
				data: {
					id: user.id,
					login: user.login
				}
			}
		})
	}

	// if (!user) {
	// 	return Promise.reject({
	// 		status: false,
	// 		answer: {
	// 			message: 'Неправильный логин или пароль'
	// 		}
	// 	})
	// } else {
	// 	return new Promise((resolve, reject) => {
	// 		if (bcrypt.compareSync(password, user.password)) {
	// 			resolve({
	// 				status: true,
	// 				answer: {
	// 					message: 'Вы успешно вошли',
	// 					data: {
	// 						id: user.id,
	// 						login: user.login
	// 					}
	// 				}
	// 			})
	// 		} else {
	// 			reject({
	// 				status: false,
	// 				// handler: 'badRequest',
	// 				answer: { message: 'Неправильный логин или пароль' }
	// 			})
	// 		}
	// 	})
	// }
}
