const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require('cors');

app.use(cors({
    origin: '*',
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }));

mongoose.connect("mongodb://localhost:27017/TP9API", { useNewUrlParser: true })
const db = mongoose.connection
db.on("error", (error) => console.log(error))
db.once("open", () => console.log("Database connected"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

const userRouter = require("./router/user")
app.use("/", userRouter)

app.listen(3000, () => console.log("Server started at port 3000"))