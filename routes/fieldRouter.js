const express = require('express')
const router = express.Router()
const fieldController = require('../controllers/fieldController')

router.post('/', fieldController.create)
router.get('/', fieldController.getAll)
router.delete('/', fieldController.del)

module.exports = router