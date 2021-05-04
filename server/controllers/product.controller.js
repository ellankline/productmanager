const Product = require("../models/product.model");

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({products: allProducts}))
        .catch(err => res.json({message: "something went wrong", error: err}));
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => res.json({product: newlyCreatedProduct}))
        .catch(err => res.json({message: "something went wrong", error: err}));
}