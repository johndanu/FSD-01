const mongoose = require('mongoose');


//  const Cat = mongoose.model('Cat', { name: String });


exports.Product = mongoose.model('Product', {
    name: String,
})