const express = require("express")
const router = express.Router()
const User = require("../models/user")
const user_register_req = require("../middleware/user_register_req")

router.post("/register", user_register_req, async (req, res) => {
    try {
        let newUser = res.user
        await newUser.save()
        res.status(201).json(newUser)
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.post("/login", async (req, res) => {
    User.findOne({ username: req.body.username })
    .then((docs)=>{
        docs.isValidPassword(req.body.password)
        .then((isValid) => {
          if (isValid) {
            res.json({ login: true })
          } else {
            res.json({ login: false })
          }
        })
        .catch((error) => {
          res.json({ message: error.message })
        });
    })
    .catch((err)=>{
        res.json({message: err})
    });

})

module.exports = router