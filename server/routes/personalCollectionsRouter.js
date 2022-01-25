const express = require('express')
const router = express.Router()
const personalCollectionsController = require('../controllers/personalCollectionsController')

router.post('/', personalCollectionsController.create)
router.get('/', personalCollectionsController.getAll)
router.delete('/', personalCollectionsController.del)

module.exports = router