const register = (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    // const address = req.body.address (case)

    const result = {
        message: 'Register Success',
        data: {
            uid: 1,
            name: name,
            email: email,
            password: password,
            // address (case)
        }
    }
    res.status(200).json({result})
}

module.exports = {
    register,
}