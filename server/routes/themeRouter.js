const express = require('express')
const router = express.Router()
const themeController = require('../controllers/themeController')

router.post('/', themeController.create)
router.get('/', themeController.getAll)
router.delete('/', themeController.del)

module.exports = router