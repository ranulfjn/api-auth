const bcrypt = require('bcrypt');
const {registerValidation , loginValidation} = require('../validation')

const Players = require('../models/Players')

// const getUser =async (req,res)=>{

//     try{
//         const players = await Players.find();
//         res.send(players)
//     } catch (err)
//     {
//         res.send("message:"+err);
//     }
   
// }

const registerPlayer = async (req,res)=>{


  
        const {error} =  registerValidation(req.body)

        if(error) return res.status(400).send(error.details[0].message);
        
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
                res.status(200).send();
            }
        

       

    
}

const loginPlayer =async (req,res)=>{

    const {error} =  loginValidation(req.body)

    if(error) return res.status(400).send('Email / Password Incorrect');

}
module.exports= {
    registerPlayer,
    loginPlayer
}