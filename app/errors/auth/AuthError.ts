interface IAuthErrorHandler {
	status: true
	answer: {
		message: string,
		data: object | object[]
	}
}

export class AuthError {
	private data: any

	constructor(data: IAuthErrorHandler) {
		this.data = data
	}

	static badRequest(data) {
		return new AuthError(data)
	}

	static internal(data) {
		return new AuthError(data)
	}
}
