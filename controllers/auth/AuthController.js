const AuthError = require('../../errors/auth/AuthError')
const LoginValidator = require('../../services/auth/LoginValidator')
const User = require('../../models/User')
const API = require('../../services/API')

class AuthController {
	/**
	 * Метод входа, обязанности:
	 *    - проверить наличие данных
	 *    - проверить совпадение логина / пароля
	 *    - сгенерировать токен доступа
	 *    - положить токен в куки
	 *    - отдать ответ на клиент
	 */
	async login(req, res, next) {
		LoginValidator.checkCredentials(req, ['login', 'password'])
			.then()
			.catch((error) => {
				next(
					AuthError[error.handler]({
						answer: {
							status: false,
							message: error.message
						}
					})
				)
			})
	}

	// tryLogin() {
	// 	const stmt = db.prepare('SELECT * FROM users WHERE auth = ? LIMIT 1')
	// 	const result = stmt.get(auth)
	//
	// 	console.log(result)
	// }
}

module.exports = new AuthController()
