const LoginError = require('./LoginError')

const loginErrorHandler = (err, req, res, next) => {
	console.log('loginErrorHandler func: ', err)

	if (err instanceof LoginError) {
		return res.status(err.code).json(err.message)
	}

	res.status(500).json('something went wrong')
}

module.exports = loginErrorHandler
