const bcrypt = require('bcrypt');
const Joi = require('joi');
const schema = require('../validation')

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


  
        const {error} =  schema.validate(req.body)

        if(error) {
            res.send(error.details[0].message);
        } else{
            const salt = await bcrypt.genSalt(10)
            const hashPassword= await bcrypt.hash(req.body.password,salt);
           
            
            const register = new Players({
                name:req.body.name,
                email:req.body.email,
                password:hashPassword
            })
        
        
            try{
                console.log('Player:'+register)
               const player= await register.save();
               
               
                res.send(player);
        
            }catch(err){
                res.status(200).send();
            }
        }

       

    
}

module.exports= {
    registerPlayer
}