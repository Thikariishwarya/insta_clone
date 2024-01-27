const mongoose=require("mongoose");
const profile=require("./models/user.js");
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
let posts=[{
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6o461un_JYPQUjER98Rd8Pswe7SX4hQoRGA&usqp=CAU",
    likes:"20",
    comments:"3"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUO9CPxWLn3-rHOfJMcpnNZdPgK63KiZ5278nOY0WaWotjizEu3e2cENFJesXGx_wtfZw&usqp=CAU",
    likes:"50",
    comments:"10"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwgPwSy6mbXSY_TwEU25F_iInoQkXoUf_KM5DJ4jm75zgxoPrQVgRqhsvy99Mjm-ggKHM&usqp=CAU",
    likes:"100",
    comments:"30"
  }
];
profile.insertMany({
  username:"my_account",
  name:"flowers_love",
  posts,
  followers:90,
  following:139,
  bio:"I love music",
});