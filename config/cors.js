const cors = require('cors')

module.exports = cors({
	origin: 'http://localhost:8080',
	methods: ['GET', 'POST', 'PATCH', 'DELETE'],
	allowedHeaders: ['Content-Type', 'Authorization']
})
