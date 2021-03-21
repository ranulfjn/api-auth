const  express = require ("express");
const router= express.Router();
const verify = require('./verifyToken')
const {registerPlayer,loginPlayer , getPlayer} = require('../controllers/players')


router.get('/players',verify,getPlayer);

router.post('/register' , registerPlayer)
router.post('/login' , loginPlayer)



module.exports=router;




