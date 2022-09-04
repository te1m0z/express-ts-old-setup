class LoginError {
	code = null
	message = null

	constructor(code, message) {
		this.code = code
		this.message = message
	}

	static badRequest(message) {
		return new LoginError(400, message)
	}

	static internal(message) {
		return new LoginError(500, message)
	}
}

module.exports = LoginError
