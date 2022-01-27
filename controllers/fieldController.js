const {Field} = require('../models/models')
const ApiError = require('../error/ApiError')

class FieldController{
    async create(req,res){
        const {name} = req.body
        const field = await Field.create({name})
        return res.json(field)
    }
    async getAll(req,res){
        const fields = await Field.find()
        return res.json(fields)
    }
    async del(req,res){

    }
}

module.exports = new FieldController()