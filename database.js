require("dotenv").config();
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");

const DBSOURCE = "./database/db.sqlite";

const checkUsersTableExists = () => {
    db.get("SELECT * FROM ?", null, (err, row) => {
        if (err) {
            console.error(err);
        }
    });
};

const databaseCallback = (createError) => {
    if (createError) {
        console.log("databaseCallback: ", createError.message); throw createError;
    } else {
        const sql = `
            CREATE TABLE IF NOT EXISTS users(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                login TEXT UNIQUE NOT NULL,
                PASSWORD TEXT NOT NULL
            )
        `;

        const bcryptHandle = (err, hash) => {
            if (checkUsersTableExists) {
            } else {
                db.run(sql);
            }
        };

        bcrypt.hash(process.env.DB_PASS, 10, bcryptHandle);
    }
};

let db = new sqlite3.Database(DBSOURCE, databaseCallback);

module.exports = db;
