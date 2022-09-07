class AuthError {
	constructor(code, data) {
		this.code = code
		this.answer = data
	}

	static badRequest(data) {
		return new AuthError(400, data)
	}

	static internal(data) {
		return new AuthError(500, data)
	}
}

module.exports = AuthError
