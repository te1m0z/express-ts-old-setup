import { NextFunction as Next, Request } from 'express'
// import { checkReqBody } from '../helpers/Validator'
// import { compareCredentials } from '../helpers/API'
// import { generateToken } from '../utils/generateAccessToken'
// import { setCookies } from '../helpers/Cookies'
// import { ApiResponseError } from '../interfaces/ApiResponse'
import { IPromisedResponse } from '../interfaces/IResponsePromise'

export class AuthController {

	/** Метод входа:
	 *    - проверить наличие данных
	 *    - проверить совпадение логина / пароля
	 *    - сгенерировать токен доступа
	 *    - положить токен в куки
	 *    - отдать ответ на клиент
	 */
	static login(req: Request, res: IPromisedResponse, next: Next): void {

		const a = res.promise({ name: 'dima' })
		
		console.log(a)

		res.send('hello')

		// checkReqBody(req, ['login', 'password'])
		// 	.then((result) => compareCredentials(result.answer.data))
		// 	.then((result) => generateToken(result.answer.data))
		// 	.then((result) =>
		// 		setCookies(res, { token: result.answer.data.token }, result)
		// 	)
		// 	.then((result) => res.json(result))
		// 	.catch((err: ApiResponseError) => next(err))
	}
}
