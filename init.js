const mongoose=require("mongoose");
const Post=require("./models/post.js");
main()
.then((res)=>{
  console.log("connection successful");
})
.catch((err)=>{
  console.log(err);
});
 
async function main(){
  await mongoose.connect("mongodb://127.0.0.1:27017/instagram");
};

let posts=[
{
username:"Cat",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQK072qZcrCTN3noOGMncQoi30T3ftTJWHDQ&usqp=CAU",
likes:100,
caption:"cute!! as always",
},
{
username:"Dog",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnueiEccwjckpKwMajtBZ0hRGA-uwnzGaITA&usqp=CAU",
likes:500,
caption:"Loves garden",
},
{
username:"rabbit",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9qeOydgTmevlEX0TR4vEhGKKHaMzvaddXA&usqp=CAU",
likes:700,
caption:"unique in my way",
}
];
Post.insertMany(posts);