const  express = require ("express");
const router= express.Router();
const {registerPlayer,loginPlayer} = require('../controllers/players')


//router.get('/players',getUser);

router.post('/register' , registerPlayer)
router.post('/login' , loginPlayer)



module.exports=router;




