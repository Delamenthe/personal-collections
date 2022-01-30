const db = require('../db')
const {Schema, model} = require("mongoose");

const UserSchema = new db.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, trim: true},
    password: {type: String, required: true},
    role: {type: String, default: "USER"},
})
const User= model("User",UserSchema)


const ThemeSchema = new db.Schema({
    name: {type: String, required: true},
})
const Theme=model("Theme",ThemeSchema)



const TagSchema = new db.Schema({
    name: {type: String, required: true, trim:true},
})
const Tag=model("Tag",TagSchema)

const ItemSchema = new db.Schema({
    name: {type: String, required: true, trim:true},
    tags: {type: [Schema.Types.ObjectId], ref: "Tag"},
    comments: {type: [String]},
    likes: {type: Number, min: 0},
    img: { type: String},
    collection_id: {type: Schema.Types.ObjectId, ref: "Collection"},
    creation_date: Date
})
const Item=model("Item",ItemSchema)


const CollectionSchema = new db.Schema({
    name: {type: String, required: true},
    theme_id: {type: Schema.Types.ObjectId, ref: "Theme"},
    description: {type: String, required: true, maxLength: 255},
    img: { type: String},
    author_id: {type: Schema.Types.ObjectId, ref: "User"}
})
const Collection=model("Collection",CollectionSchema)


module.exports ={
    User,
    Collection,
    Theme,
    Item,
    Tag
}