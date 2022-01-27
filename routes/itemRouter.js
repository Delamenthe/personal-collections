const express = require('express')
const router = express.Router()
const itemController = require('../controllers/itemController')

router.post('/', itemController.create)
router.get('/', itemController.getAll)
router.get('/:id', itemController.getOne)
router.delete('/', itemController.del)

module.exports = router