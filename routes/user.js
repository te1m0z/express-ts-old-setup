const express = require("express");
const router = express.Router();

const userService = require("../services/userService.js");

router.post("/", function (req, res) {
    userService.tryLogin(req)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(error));
});

module.exports = router;
