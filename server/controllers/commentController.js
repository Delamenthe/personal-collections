const {Comment} = require('../models/models')
const ApiError = require('../error/ApiError')

class CommentController{
    async create(req,res){
        const {text} = req.body
        const comment = await Comment.create({text})
        return res.json(comment)
    }
    async getAll(req,res){
        const comments = await Comment.find()
        return res.json(comments)
    }
    async del(req,res){

    }
}

module.exports = new CommentController()