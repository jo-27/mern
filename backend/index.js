const express = require('express')

const app=express()

app.get("/",(req,res)=>{
    res.send("<h1>welcome back<h1>")
})
app.get("/static",(req,res)=>{
    res.sendFile("C:\\Users\\joans\\OneDrive\\Documents\\desktop\\mern\\html_css\\index.html")
})
const PORT =3001

app.listen(PORT,()=>console.log("server started successfully"))