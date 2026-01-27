const express = require('express')

const app =  express()

app.use("/hello",(req,res)=>{
    res.send("Hello Hello Hello")
});

app.use("/",(req,res)=>{
    res.send("welcome your server is started")
});


app.listen(7777,()=>{
    console.log("server is started my friend")
})

