const mongoose=require("mongoose");

const userProfileSchema=new mongoose.Schema({
    username:{
        type:String
    },
    name:{
        type:String
    },
    posts:{
        type:Array,
    },
    followers:{
        type:Number,
    },
    following:{
        type:Number,
    },
    bio:{
        type:String,
    }
});
const profile=mongoose.model("profile",userProfileSchema);
module.exports=profile;