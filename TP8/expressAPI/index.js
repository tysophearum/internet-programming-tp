const express = require('express')
const fs = require('fs');
const app = express()
const cors = require('cors');

app.use(express.json())
app.use(cors({
  origin: '*',
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));

function jsonReader(filePath, cb) {
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (err) {
      return cb && cb(err);
    }
  });
}

app.post('/register', function (req, res) {
  jsonReader("./data.json", (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
      return;
    }

    const check = data.find( (u) => u.email === req.body.email)
    if (check === undefined && req.body.email != "" && req.body.password != "" && req.body.username != "" && req.body.firstname != "" && req.body.lastname != ""){
      let newUser = {
        id: data.length,
        username: req.body.username,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
        success: true
      }
      console.log(newUser);
      data.push(newUser)
      fs.writeFile("./data.json", JSON.stringify(data, null, 2), err => {
        if (err) console.log("Error writing file:", err);
      });
      res.send(newUser);
    }
    else{
      res.send({
        success: false,
        error: "User is already exist!"
      })
    }

  });
})

app.post('/login', (req, res) => {
  jsonReader('./data.json', (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
      return;
    }

    const user = data.find( (u) => u.email === req.body.email && u.password === req.body.password)

    if(!user){
      res.send({
        success: false,
        error: "This user's information is incorrect!"
      })
    }
    res.send(user)
  })
})

app.listen(3000, () => {
  console.log("Your project is running on port: 3000");
});