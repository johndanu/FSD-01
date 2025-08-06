const express = require('express')
const mongoose = require('mongoose');



const app = express()


mongoose.connect('mongodb+srv://john:GHlSts3qpFXRdv3R@cluster0.gbqnvph.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const productRoutes = require('./routes/product')
const logger = require('./middleware/logger')

app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index', {
        title: "thi is home page"
    })
})

app.get('/about', (req, res) => {
    res.render('index', {
        title: 'About page of John'
    })
})

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const users = [
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Smith', age: 17 },
        { id: 3, name: 'Mike Johnson', age: 32 },
        { id: 4, name: 'Sarah Wilson', age: 16 },
        { id: 5, name: 'David Brown', age: 28 },
    ]

    const userDetails = users.find(u => u.id == userId)

    res.render('user', { userDetails })


})

app.use('/product', logger, productRoutes)
app.use(express.static('public'))

app.use((req, res) => {
    res.status(404).send('<h1>Not found</h1>')
})

app.listen(8080, () => {
    console.log('Server Started at localhost:8080')
})



// entities

// product