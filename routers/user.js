const express = require('express');
const router = express.Router();
const { login ,register,states,update  } = require('../controllers/auth')
const { log,log2,reg } = require('../middlewares/midauth')


router.route('/').post(reg,register);
router.route('/login').post(log2 || log,login);


module.exports = router;