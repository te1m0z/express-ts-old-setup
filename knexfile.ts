import type { Knex } from 'knex'
import path from 'path'

const config: { [key: string]: Knex.Config } = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: path.resolve(__dirname, 'app', 'database', 'database.sqlite')
		},
		migrations: {
			directory: path.resolve(__dirname, 'app', 'database', 'migrations')
		},
		seeds: {
			directory: path.resolve(__dirname, 'app', 'database', 'seeds')
		},
		useNullAsDefault: true
	},

	staging: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	},

	production: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	}
}

module.exports = config
