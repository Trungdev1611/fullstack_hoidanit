import express from 'express'
import homeController from './../controller/homeController'
import userController from './../controller/userController'
let router = express.Router()

let initwebroute = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/crud', homeController.getCRUD)
    router.post('/post-crud', homeController.postCRUD)
    router.get('/get-crud', homeController.displayGETCRUD)
    router.get('/edit-user', homeController.editCRUD)
    router.get('/delete-user', homeController.deleteCRUD)

    router.post('/api/login', userController.handleLogin)
    return app.use('/', router)
}
export default initwebroute