const express = require("express");
const router = express.Router();

const { getAll, tryCreate, getOne } = require("../services/postsService.js");


router.get('/', (_, res) => {
    getAll()
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(error));
});

router.post('/', (req, res) => {
    tryCreate(req)
        .then(result => res.status(201).json(result))
        .catch(error => res.status(500).json(error));
});

router.get('/:id', (req, res) => {
    getOne(req)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(error));
});

router.all("/", (_, res) => res.status(403).end()); 

module.exports = router;
