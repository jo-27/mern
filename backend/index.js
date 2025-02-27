const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const cors=require('cors')
const Signup = require("./models/signupSchema");
const app = express();
app.use(cors({
  origin:"https://mern-prac-one.vercel.app/"
}))
app.use(express.json());
const PORT = 3001;
dotenv.config();
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

app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newSignup = new Signup({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      password: hashedPassword,
      email: email,
    });
    newSignup.save();
    console.log("signup sucess");
    res.status(201).json({ message: "Signup Successfull", isSignup: true });
  } catch (error) {
    res.status(400).json({ message: "Signup UnSuccessfull", isSignup: false });
  }
});

app.get('/getsignupdet',async(req,res)=>{
  const signup=Signup.find()
  console.log(signup)
  res.send("signup details fetched")
});

app.post("/login", async(req, res) => {
  try {
    const{email,password}=req.body
    const exitingUser=await Signup.findOne({email:email})
    if(exitingUser!=null){
      const isValidPassword=await bcrypt.compare(password,exitingUser.password)
      if(isValidPassword){
        res.status(201).json({message:"login successfull",isLoggedin:true})
      }
      else{
        res.status(201).json({message:"incorrect password",isLoggedin:false})
      }
    }
    else{
      res.status(201).json({message:"user not found sigup first",isLoggedin:false})
    }
    res.json({message:"login fetched"})
  } catch (error) {
    console.log("login error");
    res.status(400).json({message:"login error check your code",isLoggedin:false})
  }
});


app.listen(PORT, () => console.log("server started successfully"));
