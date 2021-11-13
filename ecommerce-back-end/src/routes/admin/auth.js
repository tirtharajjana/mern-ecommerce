const express = require('express');
const { requireSignin } = require('../../common-middleware');
const { signup, signin, signout } = require('../../controllers/admin/auth');
const { validateSignupRequest: validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../../validators/auth');
const router = express.Router();

router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/admin/signin', validateSigninRequest, isRequestValidated, signin)
router.post('/admin/signout', requireSignin, signout)


router.post('/profile', (req, res) => [
    res.status(200).json({ user: 'Profile' })
])

module.exports = router;