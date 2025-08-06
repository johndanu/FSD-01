const mongoose = require('mongoose');


exports.Product = mongoose.model('Product', {
    name: {
        type: String,
        minlength: [3, 'Product name must be at least 3 letters long'],
        trim: true
    },
})