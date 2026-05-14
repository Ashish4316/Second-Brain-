import mongoose,{model, Schema} from "mongoose";

mongoose.connect("mongodb://localhost:27017/brainly");

const ObjectId = mongoose.Types.ObjectId;
const UserSchema = new Schema ({
    username : {type : String,unique : true},
    password : String
})

export const UserModel = model("User",UserSchema);

const ContentSchema = new Schema({
    title : String,
    link : String,
    tags: [{type : ObjectId, ref: 'Tag'}],
    userId : {type : ObjectId , ref : "User" , required : true}
})

export const ContentModel = model("Content", ContentSchema);