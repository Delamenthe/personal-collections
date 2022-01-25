const express = require('express')
const router = express.Router()
const tagController = require('../controllers/tagController')

router.post('/', tagController.create)
router.get('/', tagController.getAll)
router.delete('/', tagController.del)

module.exports = router