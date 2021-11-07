const express = require('express');
const slugify = require('slugify');
const { addItemToCart } = require('../controllers/cart');
const { requireSignin, userMiddleware } = require('../common-middleware');
const router = express.Router();

router.post('/user/cart/add-to-cart', requireSignin, userMiddleware, addItemToCart)


module.exports = router;
