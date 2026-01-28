const express = require('express')

const app =  express()


// app.use("/",(req,res)=>{
//     res.send("I'm GOAT Use Methode which is override on everything")
// });

app.get("/user/:userId/:name",(req,res)=>{
    // console.log(req.query)
    console.log(req.params)
    res.send({getName : "mohit"})
});

app.post("/user",(req,res)=>{
    res.send("Data is updated sucessfully")
});

app.delete("/user",(req,res)=>{
    res.send("Data is deleted sucessfully")
});

app.use("/test ",(req,res)=>{
    res.send("This is test Api ")
});

app.listen(7777,()=>{
    console.log("server is started my friend")
})

