require('dotenv').config()
const env = process.env
const jwt = require('jsonwebtoken')

const generateJWT = (data) => {
	return jwt.sign(data, env.SECRET_WORD, {
		expiresIn: '15s'
	})
}

module.exports = {
	generateJWT
}
