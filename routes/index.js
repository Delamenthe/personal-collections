const express = require('express')
const router = express.Router()
const collectionRouter = require('./collectionRouter')

const itemRouter = require('./itemRouter')
const tagRouter = require('./tagRouter')
const themeRouter = require('./themeRouter')
const userRouter = require('./userRouter')

router.use('/collection', collectionRouter)
router.use('/item', itemRouter)
router.use('/tag', tagRouter)
router.use('/theme', themeRouter)
router.use('/user', userRouter)

module.exports = router