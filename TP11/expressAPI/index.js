const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require('cors');
const session = require('express-session')

app.use(session({
  name: `tp9api`,
  secret: 'your-secret-key', // Replace with your own secret key
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, // Set to true if using HTTPS
    maxAge: 60 * 60 * 1000,
  },
}))

app.use(cors({
    origin: '*',
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "exposedHeaders": ['set-cookie']
  }));

mongoose.connect("mongodb://localhost:27017/TP11API", { useNewUrlParser: true })
const db = mongoose.connection
db.on("error", (error) => console.log(error))
db.once("open", () => console.log("Database connected"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

const userRouter = require("./router/user")
app.use("/", userRouter)

const categoryRouter = require("./router/category")
app.use("/category", categoryRouter)

const subCategoryRouter = require("./router/subCategory")
app.use("/subCategory", subCategoryRouter)

const productRouter = require("./router/product")
app.use("/product", productRouter)


app.listen(3000, () => console.log("Server started at port 3000"))
