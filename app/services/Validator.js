class Validator {
	/**
	 * Метод проверки полей в объекте Request
	 * @param request
	 * @param data
	 * @returns {Promise<{valid: boolean}>}
	 */
	static checkRequestBody(request, data) {
		let valid = false

		if (Array.isArray(data)) {
			valid = data.every(
				(field) => request.body[field] && request.body[field] !== ''
			)
		}

		if (typeof data === 'string') {
			valid = request.body[data] && request.body[data] !== ''
		}

		return valid ? Promise.resolve({ valid }) : Promise.reject({ valid })
	}
}

module.exports = Validator
