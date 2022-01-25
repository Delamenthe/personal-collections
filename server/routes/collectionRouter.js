const express = require('express')
const router = express.Router()
const collectionController = require('../controllers/collectionController')

router.post('/',collectionController.create)
router.get('/', collectionController.getAll)
router.get('/:id', collectionController.getOne)
router.delete('/', collectionController.del)

module.exports = router