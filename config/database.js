/**
 * Модули Node.js
 */
require('dotenv').config()
const Database = require('better-sqlite3')

/**
 * Экземпляр БД
 * @type {Database}
 */
const db = new Database(process.env.DB_SOURCE)

// const initDB = () => {
// 	console.log('Попытка создать БД')
//
// 	const createTableSQL = `
//         CREATE TABLE IF NOT EXISTS users (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             login TEXT UNIQUE NOT NULL,
//             PASSWORD TEXT NOT NULL
//         )`
//
// 	db.exec(createTableSQL)
// }

module.exports = {
	db
}
