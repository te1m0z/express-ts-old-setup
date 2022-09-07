import cors from 'cors'

export default cors({
	origin: 'http://localhost:8080',
	methods: ['GET', 'POST', 'PATCH', 'DELETE'],
	allowedHeaders: ['Content-Type', 'Authorization']
})
