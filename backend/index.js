const express = require("express");
const mdb = require("mongoose");
const dotenv=require('dotenv')
const bcrypt=require("bcrypt")
const Signup=require('./models/signupSchema')
const app = express();
app.use(express.json())
const PORT = 3001;
dotenv.config()
mdb
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MBD sucess");
  })
  .catch((err) => {
    console.log("cheack you string", err);
  });

app.get("/", (req, res) => {
  res.send("<h1>welcome back<h1>");
});
app.get("/static", (req, res) => {
  res.sendFile(
    "C:\\Users\\joans\\OneDrive\\Documents\\desktop\\mern\\html_css\\index.html"
  );
});

app.post("/signup",async(req,res)=>{
    try {
        const {firstName,lastName,email,password,phoneNumber}=req.body
        const hashedPassword=await bcrypt.hash(password,10);
    const newSignup=new Signup({
        firstName:firstName,
        lastName:lastName,
        phoneNumber:phoneNumber,
        password:hashedPassword,
        email:email
    });
    newSignup.save()
    console.log("signup sucess")
    res.status(201).json({message:"Signup Successfull",isSignup:true})
        
    } catch (error) {
        res.status(400).json({message:"Signup UnSuccessfull",isSignup:false})
    }

})

app.listen(PORT, () => console.log("server started successfully"));
