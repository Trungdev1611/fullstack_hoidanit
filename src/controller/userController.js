import userService from './../service/userService'

let handleLogin = async (req, res) => {
    let email = req.body.email
    let password = req.body.password
    //goi ham ben userService
    let checklogin = await userService.handleUserLogin(email, password)
    console.log('checklogin', checklogin)
    if (checklogin.checkcondition2) {
        res.status(200).json({
            message: "login success",
            email: checklogin.data.email,
            // password: checklogin.data.password,
            roleId: checklogin.data.roleId
        })
    }
    else {
        res.status(500).json({
            masseage: "login failed"
        })
    }
}

module.exports = {
    handleLogin
}