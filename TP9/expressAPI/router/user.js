const express = require("express")
const router = express.Router()
const User = require("../models/user")
const user_register_req = require("../middleware/user_register_req")
const checkAuthenticationUsing = require("../middleware/checkAuthenticationUsing")
const checkAuthenticationGetIn = require("../middleware/checkAuthenticationGetIn")
const getUser = require("../middleware/getUser")
const jwt = require("jsonwebtoken")


router.post("/register", user_register_req, checkAuthenticationGetIn, async (req, res) => {
  try {
    let newUser = res.user
    await newUser.save()
    res.status(201).json(newUser)
      
  } catch (error) {
    res.status(400).json({message: error.message})
  }
})

router.post("/login", checkAuthenticationGetIn, async (req, res) => {
  User.findOne({ username: req.body.username })
  .then((docs)=>{
    docs.isValidPassword(req.body.password)
    .then((isValid) => {
      if (isValid) {
        let token = jwt.sign({username: docs.username}, "secret")
        req.session.jwt = token
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

router.get("/user/:id", checkAuthenticationUsing, getUser, async (req, res) => {
  res.send(res.user)
})

router.get('/logout', checkAuthenticationUsing, (req, res) => {
  // Destroy the session and clear the user information
  req.session.destroy();
  res.send('Logged out successfully');
});

module.exports = router