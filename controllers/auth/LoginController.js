const LoginError = require('../../errors/login/LoginError')
const { db } = require('../../database')

class LoginController {
	login(req, res, next) {
		this.validateRequestData(req, res, next)
	}

	validateRequestData(req, res, next) {
		if (!req.body.login && !req.body.password) {
			next(LoginError.badRequest('все поля обязательны'))
			return
		}
	}

	tryLogin() {
		const stmt = db.prepare('SELECT * FROM users WHERE login = ? LIMIT 1')
		const result = stmt.get(login)

		console.log(result)
	}
}

module.exports = new LoginController()
