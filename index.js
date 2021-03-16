const express = require('express');
const bodyParser = require('body-parser')
const PORT=5000;

const app=express();


app.get('/' ,(req,res)=>{
        res.send("HOME")
})


app.use(bodyParser.json);

app.listen(PORT ,()=>{console.log(`Server on http://localhost:${PORT}`)})