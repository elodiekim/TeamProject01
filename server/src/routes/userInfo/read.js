const {Router} = require ('express');
const read = require('../../services/userinfo/read.js');


const router =Router();


router.get('/', read);
module.exports = router;