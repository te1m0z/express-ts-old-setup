import e, { Response } from 'express'
import { ApiResponse, ApiResponseError } from './ApiResponse'

export interface IPromisedResponse extends Response {
	promise: (p: { name: string }) => Promise<ApiResponse> | e.Send
}
