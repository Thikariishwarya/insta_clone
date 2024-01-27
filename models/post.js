const mongoose=require("mongoose");

const postSchema=new mongoose.Schema({
   username:{
    type:String
   },
   image:{
   type:String
   },
   likes:{
    type:Number
   },
   caption:{
    type:String
   }
});
const Post=mongoose.model("post",postSchema);


module.exports=Post;