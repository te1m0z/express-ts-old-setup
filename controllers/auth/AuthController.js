const LoginError = require('../../errors/login/LoginError')

class AuthController {
	login(req, res, next) {
		next()
	}

	validateRequestData(req, res, next) {
		if (!req.body.login || !req.body.password) {
			next(
				LoginError.badRequest({
					answer: {
						status: false,
						message: 'Логин и пароль должны быть заполнены'
					}
				})
			)
		}
	}

	// tryLogin() {
	// 	const stmt = db.prepare('SELECT * FROM users WHERE login = ? LIMIT 1')
	// 	const result = stmt.get(login)
	//
	// 	console.log(result)
	// }
}

module.exports = new AuthController()
