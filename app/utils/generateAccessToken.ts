import 'dotenv/config'

import jwt from 'jsonwebtoken'

export const generateToken = async (data) => {
	
	const token = jwt.sign(data, process.env.SECRET_WORD, {
		algorithm: 'HS256',
		expiresIn: '20s'
	})

	return Promise.resolve({
		status: true,
		answer: {
			message: 'Токен успешно создан',
			data: {
				...data,
				token
			}
		}
	})
}
