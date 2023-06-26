const User = require("../models/user")

async function getMe (req, res, next){
    let token = req.session.jwt;

    let data = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
    
    await User.findOne({username :data.username})
    .then((docs)=>{
        res.me = docs
        next()
    })
    .catch((err)=>{
        return res.json({message: err})
    });
}

module.exports = getMe