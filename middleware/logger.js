module.exports = (req, res, next) => {
    // console.log('visited at ' + new Date())

    token = 'ashdfalidroqweorqwerjho2314noisdf34lj'
    // code to find username
    req.userName = 'John'

    const bool = true
    if (bool) {
        next()
    } else {
        res.send('Done')

    }

}