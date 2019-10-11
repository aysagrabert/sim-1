module.exports = {
    getProducts: (req, res, next) => {
        const db = req.app.get('db')
        
        db.get_products()
            .then(dbResponse => res.status(200).send(dbResponse))
            .catch(err => {
                res.status(500).send({errorMessage: 'Something went wrong!'})
            })
    }
}