class Validator {
	static checkRequestBody(request, data = []) {
		return data.every(
			(field) => request.body[field] && request.body[field] !== ''
		)
	}
}

module.exports = Validator
