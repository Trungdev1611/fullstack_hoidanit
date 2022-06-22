import bcrypt from 'bcryptjs';
import db from './../models/index'
let hashUserPassword = (password) => {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    return hash
}

let createNewUser = async (data) => {
    let passwordmahoa = hashUserPassword(data.password)

    await db.User.create({ // tao du lieu moi trong user
        email: data.email,
        password: passwordmahoa,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phonenumber: data.phonenumber,
        gender: data.gender === '1' ? true : false,
        roleId: data.roleId,

    })
    console.log('add du lieu vao user db thanh cong')

}

let displaygetcrud = async () => {
    const users = await db.User.findAll();
    return users
}

let editCRUDservice = async (id) => {
    const userfind = await db.User.findOne({ where: { id: id } })
    return userfind
}

let deleteCRUD = async (id) => {
    await db.User.destroy({ where: { id: id } })
}
module.exports = {
    createNewUser,
    displaygetcrud,
    editCRUDservice,
    deleteCRUD
}