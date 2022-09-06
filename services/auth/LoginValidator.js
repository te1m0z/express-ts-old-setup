const Validator = require('../Validator')
const AuthError = require('../../errors/auth/AuthError')

class LoginValidator extends Validator {
	/**
	 * Проверка на существование логина и пароля в запросе
	 */
	static checkForEmptyLoginAndPassword(request, data) {
		return this.checkRequestBody(request, data)
			.then((response) =>
				Promise.resolve({
					...response,
					login: request.body.login,
					password: request.body.password
				})
			)
			.catch((error) => {
				return Promise.reject({
					...error,
					handler: 'badRequest',
					message: 'Логин и пароль должны быть заполнены'
				})
			})
	}
}

module.exports = LoginValidator
