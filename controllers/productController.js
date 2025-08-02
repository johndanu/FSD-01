
const { Product } = require("../models/product");
const { formatTime } = require("../utils/formatTime")



exports.getAllProducts = (req, res) => {

    console.log(req.userName);

    res.send(formatTime())
}


exports.getSingleProduct = (req, res) => {
    console.log(new Date())
    res.send("Product get is working")
}

exports.editProduct = (req, res) => {
    console.log(new Date())
    res.send("Getting product is working")
}

exports.deleteProduct = (req, res) => {
    console.log(new Date())
    res.send("Product get is working")
}
exports.createProduct = (req, res) => {
    const car = new Product({ name: 'Car BMW' });
    car.save().then(() => console.log('meow'));
    console.log(new Date())
    res.send("Product get is working")
}