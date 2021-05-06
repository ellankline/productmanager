const Product = require("../models/product.model");

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({message: "something went wrong", error: err}));
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => res.json(newlyCreatedProduct))
        .catch(err => res.json({message: "something went wrong", error: err}));
}

module.exports.getProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}