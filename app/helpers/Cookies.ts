import { Response } from 'express'
import { ApiResponse } from '../interfaces/ApiResponse'

type ISetCookies = {}

export const setCookies = (res: Response, data, result): Promise<ApiResponse> => {
	const entries: string[] = Object.keys(data)
	entries.forEach(field => res.cookie(field, data[field]))
	return Promise.resolve(result)
}