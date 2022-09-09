const path = require('path')

const config = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: path.resolve(
				__dirname,
				'app',
				'database',
				'database.sqlite'
			)
		},
		migrations: {
			directory: path.resolve(__dirname, 'app', 'database', 'migrations')
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
