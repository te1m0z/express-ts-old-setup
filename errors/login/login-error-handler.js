const LoginError = require('./LoginError')

const loginErrorHandler = (error, request, response, next) => {

	if (error instanceof LoginError) {
		return response.status(error.code).json({
			code: error.code,
			...error.message
		})
	}

	response.status(500).json('something went wrong')
}

module.exports = loginErrorHandler
