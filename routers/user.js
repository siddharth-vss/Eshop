const express = require('express');
const router = express.Router();
const { login ,register,states,update ,admin  } = require('../controllers/auth')
const { reg } = require('../middlewares/midauth')


router.route('/').post(reg,register);
router.route('/login').post(login);
router.route('/update').patch(update);
router.route('/admin').patch(admin);


module.exports = router;