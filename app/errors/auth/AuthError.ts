interface IAuthErrorHandler {
	code: number
	answer: object
}

export class AuthError {
	private code: number
	private answer: any

	constructor(data: IAuthErrorHandler) {
		console.log(data)
		this.code = data.code
		this.answer = data.answer
	}

	static badRequest(data) {
		return new AuthError({ code: 400, ...data })
	}

	static internal(data) {
		return new AuthError({ code: 500, ...data })
	}
}
