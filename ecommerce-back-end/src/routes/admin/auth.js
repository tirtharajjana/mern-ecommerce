const express = require('express');
const { signup, signin, requireSignin } = require('../../controllers/admin/auth');
const { validateSignupRequest: validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../../validators/auth');
const router = express.Router();

router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/admin/signin', validateSigninRequest, isRequestValidated, requireSignin, signin)


router.post('/profile', (req, res) => [
    res.status(200).json({ user: 'Profile' })
])

module.exports = router;