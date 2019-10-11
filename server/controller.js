module.exports = {
    getProducts: (req, res, next) => {
        const db = req.app.get('db')
        
        db.get_products()
            .then(dbResponse => res.status(200).send(dbResponse))
            .catch(err => {
                res.status(500).send({errorMessage: 'Something is wrong!'})
            })
    },

    addProducts: (req, res) => {
        const db = req.app.get('db')
        const { name, price, image_url } = req.body

        db.add_products([name, price, image_url])
            .then(data => res.status(200).send(data))
            .catch(err => {
                res.sendStatus(500)
                console.log(err)
            })
    },

    deleteProducts: (req, res) => {
        const db = req.app.get('db')
        const {products_id} = req.params
       
        db.delete_products(products_id)
            .then(data => res.status(200).send(data))
            .catch(err => {
                res.sendStatus(500)
                console.log(err)
            })
            
    },

    updateProducts: (req, res) => {
        const db = req.app.get('db')
        const {products_id} = req.params
        const { name, price, image_url } = req.body
       
        db.update_products([products_id, name, price, image_url])
            .then(data => res.status(200).send(data))
            .catch(err => {
                res.sendStatus(500)
                console.log(err)
            })

    }

}