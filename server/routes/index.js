const Router = require('express')
const router = new Router()

router.use('collection')
router.use('comment')
router.use('field')
router.use('item')
router.use('personalCollections')
router.use('personalPage')
router.use('tag')
router.use('theme')
router.use('type')
router.use('user')

module.exports = router