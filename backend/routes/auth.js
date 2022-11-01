const authentification = require('../controllers/authentification')
const verify = require('../middleware/verifyemail')
const verification = require('../middleware/resetPassword')
const express = require('express');
const router = express.Router()

router.post('/register', authentification.register);
router.post('/login', authentification.Login);
router.get('/logout', authentification.logout);
router.post('/forgetpassword', authentification.forgetPassword);
router.get('/verify-email/:token', verify.verifyEmail);
router.get('/resetpassword/:token', verification.resetPassword);
router.post('/resetpassword/:token', verification.resetPassword);



module.exports = router