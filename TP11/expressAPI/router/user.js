const express = require("express")
const router = express.Router()
const User = require("../models/user")
const user_register_req = require("../middleware/user_register_req")
const checkAuthenticationUsing = require("../middleware/checkAuthenticationUsing")
const checkAuthenticationGetIn = require("../middleware/checkAuthenticationGetIn")
const getUser = require("../middleware/getUser")
const getMe = require("../middleware/getMe")
const requireId = require("../middleware/requireId")
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
  res.json({message: 'Logged out successfully'});
});

router.get('/me', checkAuthenticationUsing, getMe, async (req, res) => {
  res.json(res.me)
})

router.post('/update-user', checkAuthenticationUsing, requireId , async (req, res) => {
  try {
    let user = await User.findById(req.body.id)
    let body = req.body
    if(body.username != null || body.username != undefined){
      user.username = body.username
    }
    else if(body.email != null || body.email != undefined){
      user.email = body.email
    }
    else if(body.firstName != null || body.firstName != undefined){
      user.firstName = body.firstName
    }
    else if(body.lastName != null || body.lastName != undefined){
      user.lastName = body.lastName
    }
  
    await user.save()
    res.json(user)
    
  } catch (error) {
    res.json({meassage: "Id is not found"})
  }
})

router.post('/update-password', checkAuthenticationUsing, requireId, async (req, res) => {
  try {
    let user = await User.findById(req.body.id)
    let body = req.body
    if(body.password != null || body.password != undefined){
      user.password = body.password
    }
  
    await user.save()
    res.json(user)
    
  } catch (error) {
    res.json({meassage: "Id is not found"})
  }
})

router.post('/delete-user', checkAuthenticationUsing, requireId, async (req, res) => {
  try {
    let user = await User.findById(req.body.id)
    user.deleteOne()
    res.json({meassage: "User deleted successfully"})
  } catch (error) {
    res.json({meassage: "Id is not found"})
  }
})



module.exports = router