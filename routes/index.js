const express = require('express')
const router = express.Router()
const collectionRouter = require('./collectionRouter')

const itemRouter = require('./itemRouter')
const tagRouter = require('./tagRouter')
const themeRouter = require('./themeRouter')
const userRouter = require('./userRouter')

router.use('/collections', collectionRouter)
router.use('/items', itemRouter)
router.use('/tags', tagRouter)
router.use('/themes', themeRouter)
router.use('/users', userRouter)

module.exports = router