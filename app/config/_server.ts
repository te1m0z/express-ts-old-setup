export const port: number = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 5000

export const host: string = process.env.SERVER_HOST || 'localhost'

export const env: string = process.env.NODE_ENV || 'development'
