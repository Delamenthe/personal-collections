const db = require('../db')
const {Schema, model} = require("mongoose");

const UserSchema = new db.Schema({
    name: {type: String, trim:true},
    email: {type: String, required: true, trim: true},
    password: {type: String, required: true},
    role: {type: String, default: "USER"},
})
User= model("User",UserSchema)

const PersonalCollectionSchema = new db.Schema({
    user_id: {type: Schema.Types.ObjectId, ref: "User"},
    collection_id: {type: [Schema.Types.ObjectId], ref: "Collection"}
})
PersonalCollections=model("PersonalCollection",PersonalCollectionSchema)

const CollectionSchema = new db.Schema({
    name: {type: String, required: true, trim:true},
    theme_id: {type: Schema.Types.ObjectId, ref: "Theme"},
    description: {type: String, required: true, maxLength: 255},
    img: { data: Buffer, contentType: String},
    items: {type: [Schema.Types.ObjectId], ref: "Items"}
})
Collection=model("Collection",CollectionSchema)

const ThemeSchema = new db.Schema({
    name: {type: String, required: true, trim:true},
})
Theme=model("Theme",ThemeSchema)

const ItemSchema = new db.Schema({
    name: {type: String, required: true, trim:true},
    tags: {type: [Schema.Types.ObjectId], ref: "Tags"},
    additional_field: {type: [Schema.Types.ObjectId], ref:"Fields"},
    comments: {type: [Schema.Types.ObjectId], ref: "Comments"},
    likes: {type: Number, min: 0},
    img: {type: String}
})
Item=model("Item",ItemSchema)

const TagSchema = new db.Schema({
    name: {type: String, required: true, trim:true},
})
Tag=model("Tag",TagSchema)

const FieldSchema = new db.Schema({
    name: {type: String, required: true, trim:true},
    type_id: {type:[Schema.Types.ObjectId], ref:"Types"}
})
Field=model("Field",FieldSchema)

const TypesSchema = new db.Schema({
    name: {type: String, required: true, trim:true},
})
Type=model("Type",TypesSchema)

const CommentSchema = new db.Schema({
    text: {type: String, required: true},
    user_id: {type: Schema.Types.ObjectId, ref: "User"}
})
Comment=model("Comment",CommentSchema)

module.exports ={
    User,
    PersonalCollections,
    Collection,
    Theme,
    Item,
    Tag,
    Field,
    Type,
    Comment
}