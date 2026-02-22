const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json());



mongoose.connect("mongodb://127.0.0.1:27017/formDB")

.then(()=>console.log("Database Connected"));



const User = mongoose.model("User",{

name:String,

email:String,

phone:String

});



app.post("/save", async(req,res)=>{

const user = new User(req.body);

await user.save();

res.send("Saved");

});


app.listen(5000,()=>{

console.log("Server running");

});