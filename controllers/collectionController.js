const {Collection} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require("uuid");
const path = require("path");
const cloudinary = require("cloudinary");

class CollectionController{
    async create(req,res,next){
        try{
            const {name, theme_id, description, author_id} = req.body
            const {img}=req.files
            let filename = uuid.v4()+".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', filename))
            cloudinary.config({
                cloud_name: 'delamenthe',
                api_key: '276829232929379',
                api_secret: 'F3KeIDWJl9cuFQ0szcy8DNnmtsA'
            });
            await cloudinary.v2.uploader.upload(path.resolve(__dirname, '..', 'static', filename),
                {public_id: filename},
                function (error, result) {
                    console.log(result);
                });

            const collection = await Collection.create({name, theme_id, description, img: filename, author_id, items: []})
            return res.json(collection)
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }


    }
    async getAll(req,res){
        let {theme_id} = req.query
        let collections;
        theme_id ? collections = await Collection.find({theme_id}) :
            collections = await Collection.find()
        return res.json(collections)
    }

    async getOne(req,res){
        const {id} = req.params
        const collection = await Collection.find({id})
        return res.json(collection)
    }
    async del(req,res){
        const {id} = req.params
        const collection = await Collection.deleteOne({id})
        return res.json(collection)
    }
}

module.exports = new CollectionController()