export interface ApiResponse {
	status: boolean
	answer: {
		message: string
		data?: object | object[]
	}
}


export interface ApiResponseError extends ApiResponse {
	handler: string
	answer: {
		message: string
	}
}
