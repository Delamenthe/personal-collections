const express = require('express')
const router = express.Router()
const commentController = require('../controllers/commentController')

router.post('/', commentController.create)
router.get('/', commentController.getAll)
router.delete('/', commentController.del)

module.exports = router