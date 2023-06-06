const userValidation = require("../validation/userValidation")
const User = require("../models/user")

const user_register_req = (req, res, next) => {
    let newUser = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    })

    const { error } = userValidation.validate(newUser);

    if(error){
        return res.status(400).json({ message: error.message })
    }
    
    res.user = newUser
    next()
}

module.exports = user_register_req