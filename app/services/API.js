const { db } = require('../config/database')

class API {
	static queryOne(sql, data) {
		try {
			const stmt = db.prepare(sql)
			const result = stmt.get(data)

			/** Если в БД что-то найдено */
			if (result) {
				return Promise.resolve({
					data: result
				})
			}

			return Promise.reject({
				status: false,
				handler: 'badRequest',
				message: 'Нет такой записи'
			})
		} catch (error) {
			return Promise.reject({
				status: false,
				handler: 'badRequest',
				message: 'Ошибка выполнения запроса API',
				serverAlert: error.message
			})
		}
	}
}

module.exports = API
