const  express = require ("express");
const router= express.Router();
const {registerPlayer} = require('../controllers/players')


//router.get('/players',getUser);

router.post('/register' , registerPlayer)



module.exports=router;




