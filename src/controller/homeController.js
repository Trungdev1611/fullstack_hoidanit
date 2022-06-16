import db from './../models/index'

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

module.exports = {
    getHomePage
}