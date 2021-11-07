const Cart = require('../models/cart')

exports.addItemToCart = (req, res) => {
    // console.log(req.body.cartItems);

    Cart.find({ user: req.user._id })
        .exec((error, cart) => {

            if (error)
                return res.status(400).json({ error });
            if (cart.length) {
                //if cart is already exist then update cart by quantity
                // console.log(cart[0].cartItems);
                const product = req.body.cartItems.product;
                const item = cart[0].cartItems?.find(c => c.product == product);
                // console.log(item);
                if (item) {
                    Cart.findOneAndUpdate({ user: req.user._id, "cartItems.product": product }, {
                        "$set": {
                            "cartItems": {
                                ...req.body.cartItems,
                                quantity: item.quantity + req.body.cartItems.quantity
                            }

                        }
                    })
                        .exec((error, _cart) => {
                            if (error)
                                return res.status(400).json({ error });
                            if (_cart) {
                                return res.status(201).json({ _cart })
                            }
                        })
                } else {
                    Cart.findOneAndUpdate({ user: req.user._id }, {
                        "$push": {
                            "cartItems": req.body.cartItems
                        }
                    })
                        .exec((error, _cart) => {
                            if (error)
                                return res.status(400).json({ error });
                            if (_cart) {
                                return res.status(201).json({ _cart })
                            }
                        })
                }


            } else {
                //if cart is not  exist then create cart 
                const cart = new Cart({
                    user: req.user._id,
                    cartItems: [req.body.cartItems]
                })

                cart.save((error, cart) => {
                    if (error)
                        return res.status(400).json({ error });
                    if (cart) {
                        return res.status(201).json({ cart })
                    }
                })
            }
        })

}