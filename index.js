const express = require('express');
const bodyParser = require('body-parser')
const playerRoute =require('./routes/players')
const PORT=5000;

const app=express();
app.use(bodyParser.json);

app.use('/auth' ,playerRoute)


app.listen(PORT ,()=>{console.log(`Server on http://localhost:${PORT}`)})