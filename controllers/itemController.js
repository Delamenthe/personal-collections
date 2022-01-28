const {Item} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class ItemController{
    async create(req,res, next){
        try{
            const{name, tags, comments, likes} = req.body
            const {img} = req.files

            let filename = uuid.v4()+".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', filename))

            const item = await Item.create({name,tags, comments, likes, img: filename})
            return res.json(item)
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req,res){
        let {tags}=req.query
        let items;
        if(!tags){
            items = await Item.find()
        }else{
            items = await Item.find({tags})
        }
        return res.json(items)
    }
    async getOne(req,res){
        const {id} = req.params
        const item = await Item.find({id})
        return res.json(item)
    }
    async del(req,res){

    }
}

module.exports = new ItemController()