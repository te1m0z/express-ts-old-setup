import 'dotenv/config'
import App from './app'
import Knex from 'knex'
import { Knex as IKnex } from 'knex/types/index'

console.log(App)

export default 100

// const a = Knex({
// 	client: 'sqlite3',
// 	connection: {
// 		filename: '../database/db.sqlite'
// 	},
// 	useNullAsDefault: true
// })

// export default a
