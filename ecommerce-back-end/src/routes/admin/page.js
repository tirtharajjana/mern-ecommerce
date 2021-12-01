const express = require('express');
const { upload, requireSignin } = require('../../common-middleware');
const { initialData } = require('../../controllers/admin/initialData');
const { createPage, getPage } = require('../../controllers/admin/page');
// const { requireSignin } = require('../../common-middleware');
// const { signup, signin, signout } = require('../../controllers/admin/auth');
// const { validateSignupRequest: validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../../validators/auth');
const router = express.Router();

router.post('/page/create', requireSignin, upload.fields([
    { name: 'banners' },
    { name: 'products' }
]), createPage);

router.get('/page/:category/:type', getPage)


module.exports = router;