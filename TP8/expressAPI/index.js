const express = require('express')
const fs = require('fs');
const app = express()

const a = {
    name: "phearum",
    age: 12
}

app.post('/api/newuser', function (req, res) {
    fs.writeFile('./data.json', JSON.stringify(a), (err) => {
      if (err) {
        console.error(err);
      }else{
        console.log("Yay")
      }
    });
  })


// app.listen(3000, () => {
//   console.log("Your project is running on port: 3000");
// });