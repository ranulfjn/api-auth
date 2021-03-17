const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    console.log('players')
    res.send('Players')
});



module.exports=router;




