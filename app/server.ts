import 'dotenv/config'
import { App, IApp } from './app'

export const app: IApp = new App()

app.listen()
