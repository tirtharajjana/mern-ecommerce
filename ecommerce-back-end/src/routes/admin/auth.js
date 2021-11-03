const express = require('express');
const { signup, signin, requireSignin } = require('../../controllers/admin/auth');
const router = express.Router();

router.post('/admin/signup', signup);
router.post('/admin/signin', requireSignin, signin)


router.post('/profile', (req, res) => [
    res.status(200).json({ user: 'Profile' })
])

module.exports = router;