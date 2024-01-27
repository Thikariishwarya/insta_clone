const express=require("express");
const path=require("path");
const mongoose=require("mongoose");
const post=require("./models/post.js");
const user=require("./models/user.js")
app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.set("views engine","ejs");
app.set("views",path.join(__dirname,"views"));
main()
.then((res)=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/instagram');
};

const port=3000;
app.listen(port,(req,res)=>{
    console.log("app is listening");
})

app.get("/",async (req,res)=>{
  let posts= await post.find();
  let profile= await user.find();
  let username = profile[0].username;
  res.render("index.ejs",{posts,username})
});

app.get("/:username",async(req,res)=>{
  let {username}=req.params;
  let profile=await user.find({username});
  res.render("profile.ejs",{profile});
});