const express = require('express');
const { requireSignin, adminMiddleware } = require('../../common-middleware');
const { initialData } = require('../../controllers/admin/initialData');
// const { requireSignin } = require('../../common-middleware');
// const { signup, signin, signout } = require('../../controllers/admin/auth');
// const { validateSignupRequest: validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../../validators/auth');
const router = express.Router();

router.post('/initialData', initialData);



router.post('/profile', requireSignin, adminMiddleware, (req, res) => [
    res.status(200).json({ user: 'Profile' })
])

module.exports = router;