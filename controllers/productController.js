
const { Product } = require("../models/product");
const { formatTime } = require("../utils/formatTime")



exports.getAllProducts = async (req, res) => {
    const products = await Product.find({})

    res.status(200).json({
        success: true,
        count: products.length,
        data: products,
        reqested_at: Date.now()
    })
}


exports.getSingleProduct = async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)

    if (!product) {
        res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    } else {
        res.status(200).json({
            success: true,
            data: product,
            reqested_at: Date.now()
        })
    }


}

exports.editProduct = async (req, res) => {
    const { id } = req.params;

    const updatedProdcut = await Product.findByIdAndUpdate(id, req.body)
    if (!updatedProdcut) {
        res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    } else {
        res.status(200).json({
            success: true,
            data: updatedProdcut,
            message: 'Product updated successfully',
            reqested_at: Date.now()

        })
    }
}

exports.deleteProduct = async (req, res) => {

    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id)

    if (!deletedProduct) {
        res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    } else {
        res.status(200).json({
            success: true,
            message: 'Product Deleted Successfully',
            data: deletedProduct
        })
    }


}


exports.createProduct = (req, res) => {
    console.log(req.body)
    const ProductObject = new Product(req.body);
    ProductObject.save()
        .then(() => {
            console.log('Product Saved Successfully')

            res.send("Product post is working")

        })
        .catch((err) => {
            if (err.errors.name) {
                console.error(err.errors.name.message)
                res.status(500).send(err.errors.name.message)
            }
        });
}