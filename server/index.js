require('dotenv').config()
const express = require('express')
const db = require('../server/db')
const models = require('./models/models')
const cors = require('cors')

const PORT =process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())

 start = async () => {
    try{
        app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))
    }catch (e){
        console.log(e)
    }
}
start()

