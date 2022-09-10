import { NextFunction, Request, Response } from 'express'

import { AuthError } from '../../errors/auth/AuthError'
import { checkReqBody } from '../../helpers/Validator'
import { compareCredentials } from '../../helpers/API'
import { ApiResponseError } from '../../interfaces/ApiResponse'

type IAuthController = {
	login?: (req: Request, res: Response, next: NextFunction) => void
}

abstract class AuthController implements IAuthController {

	/** Метод входа:
	 *    + проверить наличие данных
	 *    + проверить совпадение логина / пароля
	 *    - сгенерировать токен доступа
	 *    - положить токен в куки
	 *    - отдать ответ на клиент
	 */
	static login(req: Request, res: Response, next: NextFunction): void {

		checkReqBody(req, ['login', 'password'])
			.then(({ answer }) => compareCredentials(answer.data))
			.then((response) => res.json(response))
			.catch((error: ApiResponseError) => {
				next(AuthError[error.handler](error))
			})
	}
}

export default AuthController
