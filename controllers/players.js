const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {registerValidation , loginValidation} = require('../validation')
const Players = require('../models/Players')

const getPlayer = async (req,res)=>{
    
    const players = await Players.find();

    res.send(players);
}


const registerPlayer = async (req,res)=>{


  
    const {error} =  registerValidation(req.body)

    if(error) return res.status(400).send(error.details[0].message);
   
    const emailExists = await Players.findOne({email:req.body.email})
    if(emailExists) return res.status(400).send('Email / Password Incorrect')

    const salt = await bcrypt.genSalt(10)
    const hashPassword= await bcrypt.hash(req.body.password,salt);
           
       
    
    const register = new Players({
        name:req.body.name,
        email:req.body.email,
        password:hashPassword
    })
        
        
        try{
                const player= await register.save();
                res.send(player);
        
            }catch(err){
                res.status(200).send('Message:'+ err);
            }
        

       

    
}

const loginPlayer =async (req,res)=>{

    const {error} =  loginValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message);

    const player = await Players.findOne({email:req.body.email})
    if(!player) return res.status(400).send('Email does not exists')

    const validPass = await bcrypt.compare(req.body.password , player.password)

    if(!validPass) return res.status(400).send('Invalid Password')


    const token = jwt.sign({_id:player._id}, process.env.TOKEN)
    res.header('auth_token' , token).send(token);
   // res.send("Logged In")


}
module.exports= {
    registerPlayer,
    loginPlayer,
    getPlayer
}