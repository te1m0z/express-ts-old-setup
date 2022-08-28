const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");

const DBSOURCE = "./database/db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    } else {
        const sql = `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            login text UNIQUE NOT NULL,
            password text NOT NULL
        )`;
        db.run(sql);
    }
});

module.exports = db;
