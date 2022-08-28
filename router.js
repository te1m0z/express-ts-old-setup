const express = require("express");
const database = require("./database.js");

const router = express.Router();

router.get("/api/users", (req, res, next) => {
    const sql = "select * from users";
    const params = [];
    database.all(sql, params, (err, rows) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        return res.json({
            message: "success",
            data: rows,
        });
    });
});

module.exports = router;
