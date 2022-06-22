let handleLogin = (req, res) => {
    let email = req.body.email
    let password = req.body.password
    res.status(200).json({
        message: "message test",
        email: email,
        password: password
    })
}

module.exports = {
    handleLogin
}