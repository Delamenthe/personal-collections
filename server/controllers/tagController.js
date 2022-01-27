const {Tag} = require('../models/models')
const ApiError = require('../error/ApiError')

class TagController{
    async create(req,res){
        const {name} = req.body
        const tag = await Tag.create({name})
        return res.json(tag)
    }
    async getAll(req,res){
        const tags = await Tag.find()
        return res.json(tags)

    }
    async del(req,res){

    }
}

module.exports = new TagController()