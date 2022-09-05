const Validator = require('../Validator')
const AuthError = require('../../errors/auth/AuthError')

class LoginValidator extends Validator {
	static async checkCredentials(request, data) {
		const loginAndPasswordExists = this.checkRequestBody(request, data)

		if (loginAndPasswordExists) {
			return Promise.resolve({
				valid: true
			})
		}

		return Promise.reject({
			valid: false,
			handler: 'badRequest',
			message: 'логин и пароль должны быть'
		})
	}
}

module.exports = LoginValidator
