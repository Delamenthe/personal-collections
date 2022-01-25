const db = require('../db')
const {Schema, model} = require("mongoose");

const UserSchema = new db.Schema({
    _id: {type: Schema.Types.ObjectId},
    name: {type: String, required: true, trim:true},
    email: {type: String, required: true, trim: true},
    password: {type: String, required: true},
    role: {type: String, default: "USER"},
})
User= model("User",UserSchema)

const PersonalPageSchema = new db.Schema({
    _id: {type: Schema.Types.ObjectId},
    user_id: {type: Schema.Types.ObjectId, ref:'UserSchema'}
})
PersonalPage=model("PersonalPage", PersonalPageSchema)

const PersonalCollectionSchema = new db.Schema({
    _id: {type: Schema.Types.ObjectId},
    personal_collections_id: {type: Schema.Types.ObjectId, ref: "PersonalPage"},
    collection_id: {type: [Schema.Types.ObjectId], ref: "Collection"}
})
PersonalCollections=model("PersonalCollections",PersonalCollectionSchema)

const CollectionSchema = new db.Schema({
    _id: {type: Schema.Types.ObjectId},
    name: {type: String, required: true, trim:true},
    theme_id: {type: Schema.Types.ObjectId, ref: "Theme"},
    description: {type: String, required: true, maxLength: 255},
    img: {type: String},
    items: {type: [Schema.Types.ObjectId], ref: "Items"}
})
Collection=model("Collection",CollectionSchema)

const ThemeSchema = new db.Schema({
    _id: {type: Schema.Types.ObjectId},
    name: {type: String, required: true, trim:true},
})
Theme=model("Theme",ThemeSchema)

const ItemSchema = new db.Schema({
    _id: {type: Schema.Types.ObjectId},
    name: {type: String, required: true, trim:true},
    tags: {type: [Schema.Types.ObjectId], ref: "Tags"},
    additional_field: {type: [Schema.Types.ObjectId], ref:"Fields"},
    comments: {type: [Schema.Types.ObjectId], ref: "Comments"},
    likes: {type: Number, min: 0}
})
Item=model("Item",ItemSchema)

const TagSchema = new db.Schema({
    _id: {type: Schema.Types.ObjectId},
    name: {type: String, required: true, trim:true},
})
Tags=model("Tags",TagSchema)

const FieldSchema = new db.Schema({
    _id: {type: Schema.Types.ObjectId},
    name: {type: String, required: true, trim:true},
    type_id: {type:[Schema.Types.ObjectId], ref:"Types"}
})
Fields=model("Fields",FieldSchema)

const TypesSchema = new db.Schema({
    _id: {type: Schema.Types.ObjectId},
    name: {type: String, required: true, trim:true},
})
Types=model("Types",TypesSchema)

const CommentSchema = new db.Schema({
    _id: {type: Schema.Types.ObjectId},
    text: {type: String, required: true},
    user_id: {type: Schema.Types.ObjectId, ref: "User"}
})
Comments=model("Comments",CommentSchema)

module.exports ={
    User,
    PersonalPage,
    PersonalCollections,
    Collection,
    Theme,
    Item,
    Tags,
    Fields,
    Types,
    Comments
}