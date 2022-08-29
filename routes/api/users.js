const express = require("express");
const router = express.Router();
const users = require("../../services/users.js");

/* GET all users. */
router.post("/", function (req, res, next) {
    console.log(req.body);
    res.json({ yes: 'im a' });

    // try {
    //     res.json(users.getAll(req.query.page));
    // } catch (err) {
    //     console.error(`Error while getting users `, err.message);
    //     next(err);
    // }
});

module.exports = router;
