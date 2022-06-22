import db from './../models/index'
import CRUDservice from './../service/CRUDservice'
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()        //Users o day la modelName trong models/user.js ; findAll() de lay het toan bo du lieu
        console.log('chay trong try catch homepage')
        console.log(data)
        console.log('chay trong try catch homepage')

        return res.render('homepage.ejs', { datauser: JSON.stringify(data) })
    } catch (error) {
        console.log(error)
    }

}

let getCRUD = (req, res) => {
    res.render('crud.ejs')
}
let postCRUD = (req, res) => {
    CRUDservice.createNewUser(req.body)
    return res.send('POST CRUD')
}
let displayGETCRUD = (req, res) => {
    CRUDservice.displaygetcrud().then(data => res.render('getcrud.ejs', { data: data }))
    // res.send('test')
}
let editCRUD = (req, res) => {
    if (req.query.id) {
        CRUDservice.editCRUDservice(req.query.id).then(data => res.send(JSON.stringify(data)))
    }
    else {
        res.send("Khong nhan dc Id")
    }

}

let deleteCRUD = (req, res) => {
    if (req.query.id) {
        CRUDservice.deleteCRUD(req.query.id).then(data => res.send(JSON.stringify(data))).then(res.redirect('/get-crud'))
    }
    else {
        res.send("Khong nhan dc Id")
    }
}
module.exports = {
    getHomePage,
    getCRUD,
    postCRUD,
    displayGETCRUD,
    editCRUD,
    deleteCRUD
}