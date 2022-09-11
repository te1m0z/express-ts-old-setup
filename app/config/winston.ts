import { createLogger, format, transports } from 'winston'

const currentDate: string = new Date().toLocaleDateString('ru').replaceAll('.', '-')

export const winstonLogger = createLogger({
	level: 'error',
	transports: [
		new transports.Console(),
		new transports.File({
			dirname: 'logs',
			filename: `app-logs-${currentDate}.log`
		})
	],
	format: format.combine(
		format.colorize(),
		format.timestamp(),
		format.printf(({ timestamp, level, message }) => `[${timestamp}] ${level}: ${message}`)
	)
})
