require('dotenv').config();
const express = require('express')
const app = express();
app.listen(process.env.PORT, ()=>{
    console.log("Server started");
})
app.get('/', (req, res)=>{
    res.send("Hello World!");
})