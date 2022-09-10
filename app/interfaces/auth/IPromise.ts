export interface IPromiseApiResponse {
	status: boolean
	answer: {
		message: string
		data?: any
	}
}

export interface IPromiseApiResponseError extends IPromiseApiResponse {
	handler: string
}
