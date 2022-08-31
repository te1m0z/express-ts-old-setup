const express = require("express");
const router = express.Router();

const categoriesService = require("../services/categoriesService.js");

router.get('/', function (req, res) {
    categoriesService.getAll()
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(error));
});

module.exports = router;
