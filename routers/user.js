const express = require('express');
const router = express.Router();
const { login ,register,states,update  } = require('../controllers/auth')
const { log,reg } = require('../middlewares/midauth')


router.route('/').post(reg,register);
router.route('/').get(log,login);


module.exports = router;