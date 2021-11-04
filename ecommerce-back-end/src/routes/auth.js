const express = require('express');
const { signup, signin } = require('../controllers/auth');
const { check } = require('express-validator');
const { validateSignupRequest: validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');
const router = express.Router();

router.post('/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/signin', validateSigninRequest, isRequestValidated, signin)


// router.post('/profile', (req, res) => [
//     res.status(200).json({ user: 'Profile' })
// ])

module.exports = router;