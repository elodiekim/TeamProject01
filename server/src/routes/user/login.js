const {Router} =require ('express');
const login = require('../../services/user/login') 

const router = Router()

router.get('/',login);
module.exports = router