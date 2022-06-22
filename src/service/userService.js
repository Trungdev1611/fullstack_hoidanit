import db from './../models/index'
import bcrypt from 'bcryptjs';

let handleUserLogin = async (email, password) => {
    //checkuserEmail return 1 promise nen phai dung await
    let checkemail = await checkUserEmail(email, password)
    //check nguoi dung da ton tai chua
    if (checkemail.checkcondition) {
        return { data: checkemail.data, checkcondition2: true }
    }
    else {
        return { checkcondition2: false }
    }
}

let checkUserEmail = async (useremail, userpassword) => {
    try {
        //truy van user trong database table user
        let userrow = await db.User.findOne({
            where: { email: useremail }
        })
        // console.log('email: ', userrow.password)
        //check password email tim thay co bang userpassword nguoi dung gui len khong

        console.log(bcrypt.compareSync(userpassword, userrow.password)) // so sanh pass duoc ma hoa bang bcrypt va pass nguoi dung gui len (neu giong nhau =true, else false)

        // neu username la addmin thi minh khong ma hoa thi khong can compare
        // neu username khac thi minh da ma hoa roi nen can compare
        if (userrow.password === userpassword || bcrypt.compareSync(userpassword, userrow.password)) {
            console.log('teststttttttttttttttttttt')

            return { data: userrow, checkcondition: true }
        }
        else {

            return { checkcondition: false }
        }
    }
    catch (error) {
        console.log('loi check email', error)
        throw Error('error in code');
    }
}
module.exports = {
    handleUserLogin
}