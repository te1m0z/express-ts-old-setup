const { db } = require('../database.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { generateJWT } = require('../utils/generateAccessToken')

const tryLogin = async (request, response) => {
	const login = request.body.login
	const password = request.body.password

	if (!login || !password) {
		return Promise.reject({
			status: false,
			error: {
				text: 'Логин и пароль должны быть заполнены'
			}
		})
	}

	try {
		const stmt = db.prepare('SELECT * FROM users WHERE login = ? LIMIT 1')
		const result = stmt.get(login)

		console.log(result)

		if (result) {
			const compared = await bcrypt.compare(password, result.password)

			if (compared) {
				const token = generateJWT({
					id: result.id,
					login: result.login
				})

				console.log(token)

				return Promise.resolve({
					status: true,
					success: {
						user: {
							id: result.id,
							login: result.login,
							token
						},
						text: 'Вы успешно вошли'
					}
				})
			}
		}

		return Promise.resolve({
			status: false,
			error: {
				text: 'Неверный логин или пароль'
			}
		})
	} catch (error) {
		return Promise.reject({
			status: false,
			error: {
				text: 'Ошибка при выполнении запроса',
				error: error.message
			}
		})
	}
}

module.exports = {
	tryLogin
}
