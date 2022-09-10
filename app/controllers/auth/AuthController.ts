import { NextFunction as Next, Request, Response } from 'express'
import { ApiResponseError } from '../../interfaces/ApiResponse'
import { checkReqBody } from '../../helpers/Validator'
import { compareCredentials } from '../../helpers/API'
import { generateToken } from '../../utils/generateAccessToken'
import { setCookies } from '../../helpers/Cookies'

export abstract class AuthController {

	/** Метод входа:
	 *    + проверить наличие данных
	 *    + проверить совпадение логина / пароля
	 *    + сгенерировать токен доступа
	 *    + положить токен в куки
	 *    + отдать ответ на клиент
	 */
	static login(req: Request, res: Response, next: Next): void {

		checkReqBody(req, ['login', 'password'])
			.then((result) => compareCredentials(result.answer.data))
			.then((result) => generateToken(result.answer.data))
			.then((result) => setCookies(res, { token: result.answer.data.token }, result))
			.then((result) => res.json(result))
			.catch((err: ApiResponseError) => next(err))
	}
}
