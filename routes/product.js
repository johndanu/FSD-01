const express = require('express')
const router = express.Router()

const { getAllProducts, editProduct, deleteProduct, getSingleProduct, createProduct } = require('../controllers/productController')


router.get('/:id', getSingleProduct)

router.get('/', getAllProducts)

router.post('/', createProduct)

router.put('/:id', editProduct)

router.delete('/:id', deleteProduct)



module.exports = router;