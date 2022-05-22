const productModel = require('../model/productSchema');

exports.createProduct = async(req, res, next) => {
    const productData = new productModel({...req.body});
    try {
        let response = await productData.save();
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}

exports.getproduct = async(req, res, next) => {
    try {
        const products = await productModel.find();
        res.send(products);
        } catch (error) {
        console.log(error);
    }
}

exports.getOneProduct = async(req, res, next) => {
    try {
        const product = await productModel.findOne({_id: req.params.id});
        res.send(product);
        } catch (error) {
        console.log(error);
    }
}

exports.updateProduct = async(req, res, next) => {
    try {
        const product = await productModel.findOneAndUpdate({_id: req.params.id}, {...req.body}, {runValidators: true , new: true});
        res.send(product)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteProduct = async(req, res, next) => {
    try {
        const product = await productModel.findByIdAndRemove({_id: req.params.id});
        res.send(product);
    } catch (error) {
        console.log(error)
    }
}

