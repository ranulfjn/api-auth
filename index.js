const express = require('express');
const bodyParser = require('body-parser')
const playersRoute =require('./routes/players.js')
const mongoose = require('mongoose')
require('dotenv').config();


const app = express();
const PORT = 5000;
app.use(bodyParser.json());


mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true , useUnifiedTopology: true}, 
    ()=>{console.log('connected!!!')
})

app.use('/api/auth' ,playersRoute)


app.listen(PORT,()=>{console.log(`Server on http://localhost:${PORT}`)})