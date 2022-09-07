import { Request, Response, NextFunction } from 'express'
import knex from '../../knex'

// const AuthError = require('../../errors/auth/AuthError')
// const loginValidator = require('../../services/auth/LoginValidator')
// const User = require('../../models/User')
// const API = require('../../services/API')
// const JWT = require('../../services/JWT')

class AuthController {
	/**
	 * Метод входа:
	 *    - проверить наличие данных
	 *    - проверить совпадение логина / пароля
	 *    - сгенерировать токен доступа
	 *    - положить токен в куки
	 *    - отдать ответ на клиент
	 */
	static login(req: Request, res: Response, next: NextFunction): void {
		console.log(knex)
		res.json({ ts: true })
		// loginValidator
		// 	.checkForEmptyLoginAndPassword(req, ['login', 'password'])
		// 	.then(({ login }) => {
		// 		return API.queryOne(
		// 			`SELECT * FROM ${User.table} WHERE login = @login LIMIT 1`,
		// 			{ login }
		// 		)
		// 	})
		// 	.then((data) => {
		// 		return JWT.create(data)
		// 	})
		// 	.catch((error) => {
		// 		if (error.serverAlert) {
		// 			console.log('error.serverAlert: ', error.serverAlert)
		// 		}
		// 		next(
		// 			AuthError[error.handler]({
		// 				status: false,
		// 				message: error.message
		// 			})
		// 		)
		// 	})
	}
}

export default AuthController
