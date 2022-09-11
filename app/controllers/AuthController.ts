import { NextFunction as Next, Request, Response } from 'express'

export class AuthController {

	/** Метод входа:
	 *    - проверить наличие данных
	 *    - проверить совпадение логина / пароля
	 *    - сгенерировать токен доступа
	 *    - положить токен в куки
	 *    - отдать ответ на клиент
	 */
	static login(req: Request, res: Response, next: Next): void {

		// Promise.all([
		// 	checkReqBody(req, ['login', 'password']),
		// 	(a) => b(a)
		// ]).then((result) => {
		// 	res.json({ errors: result })
		// }, (err: ApiResponseError) => {
		// 	next(err)
		// })

		// checkReqBody(req, ['login', 'password'])
		// 	.then((result) => compareCredentials(result.answer.data))
		// 	.then((result) => generateToken(result.answer.data))
		// 	.then((result) => setCookies(res, { token: result.answer.data.token }, result))
		// 	.then((result) => res.json<IPromiseApiRe	sponse>(result))
		// 	.catch((err: ApiResponseError) => next(err))
	}
}
