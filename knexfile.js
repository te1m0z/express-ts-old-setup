require('dotenv').config()

module.exports = {
    client: 'sqlite3',
    connection: process.env.DB_SOURCE || 'db.sqlite'
}