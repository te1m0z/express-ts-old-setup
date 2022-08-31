require("dotenv").config();
const env = process.env;
const Database = require("better-sqlite3");
const bcrypt = require("bcrypt");

const DBSOURCE = "./database/db.sqlite";

const db = new Database(DBSOURCE);

const initDB = () => {
    const createTableSQL = `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            login TEXT UNIQUE NOT NULL,
            PASSWORD TEXT NOT NULL
        )`

    db.exec(createTableSQL);
}

module.exports = {
    db,
    initDB
};
