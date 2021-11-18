const Product = require('../models/product');
const shortid = require('shortid');
const slugify = require('slugify');
const Category = require('../models/category');


exports.createProduct = (req, res) => {
    // res.status(200).json({ file: req.files, body: req.body })
    const { name, price, description, category, quantity } = req.body;

    let productPicture = [];

    if (req.files.length > 0) {
        productPicture = req.files.map(file => {
            return { img: file.filename }
        })
    }
    // console.log(req.body);
    const product = new Product({
        name,
        slug: slugify(name),
        price,
        description,
        productPicture,
        category,
        createdBy: req.user._id,
        quantity
    })

    product.save(((error, product) => {
        if (error)
            return res.status(400).json({ error })
        if (product)
            return res.status(201).json({ product })
    }))
}

exports.getProductsBySlug = (req, res) => {
    const { slug } = req.params;
    Category.findOne({ slug })
        .select('_id')
        .exec((error, category) => {
            if (error) {
                return res.status(400).json({ error })
            }
            if (category) {
                Product.find({ category: category._id })
                    .exec((error, products) => {
                        if (error) {
                            return res.status(400).json({ error })
                        }
                        if (products.length > 0)
                            return res.status(200).json({
                                products, productsByPrice: {
                                    under5k: products.filter(product => product.price <= 5000),
                                    under10k: products.filter(product => product.price > 5000 && product.price <= 10000),
                                    under15k: products.filter(product => product.price > 10000 && product.price <= 15000),
                                    under20k: products.filter(product => product.price > 15000 && product.price <= 20000),
                                }
                            })
                    })
            }
        })
}