const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.put('/',userController.update)
router.get('/',userController.getAll)
router.get('/auth', authMiddleware, userController.check)
router.delete('/',userController.delete)
module.exports = router