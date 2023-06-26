const User = require("../models/user")

async function requireId (req, res, next) {
    let id = req.body.id
    if(id == undefined || id == null) {
        return res.json({message: "user id was not passed in"})
    }
    else{
        next()
    }
}

module.exports = requireId