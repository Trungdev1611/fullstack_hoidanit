import express from 'express'

let router = express.Router()
let initwebroute = (app) => {
    router.get('/', (req, res) => {
        res.send('Hello World')
    })

    return app.use('/', router)
}
export default initwebroute