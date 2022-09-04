const express = require('express')
const router = express.Router()
const LoginController = require('../controllers/auth/LoginController')

router.post('/login', LoginController.login)

// router.all('/', (req, res) => res.status(403).end())

module.exports = router
