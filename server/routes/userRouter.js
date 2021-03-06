const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authNiddleware')

router.post('/registration', userController.registration)
router.get('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
module.exports = router