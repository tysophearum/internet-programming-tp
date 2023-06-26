const express = require("express")
const router = express.Router()
const checkAuthenticationUsing = require("../middleware/checkAuthenticationUsing")
const Product = require("../models/product")
const getProduct = require("../middleware/getProduct")
const { error } = require("../validation/userValidation")

router.post("/create", getProduct, async (req, res) => {
    try {
        let product = res.product
        await product.save()
        res.json(product)
    } catch (error) {
        res.json({message: error.message})
    }
})

router.get("/get/all", async (req, res) => {
    try {
        res.json(await Product.find())
    } catch (error) {
        res.json({mssage: error.message})
    }
})

router.get("/get/:id", async (req, res) => {
    try {
        let product = await Product.findById(req.params.id)
        res.json(product)
    } catch (error) {
        res.json({message: error.message})
    }
})

router.get("/get/subCategory/:id", async (req, res) => {
    try {
        await Product.find({subCategoryID: req.params.id})
        .then((docs) => {
            res.json(docs)
        })
        .catch((err) => {
            res.json({message: err.message})
        })
    } catch (error) {
        res.json({message: error.message})
    }
})

// router.post("/edit/:id", async (req, res) => {
//     try {
//         let product = await Product.findById(req.params.id)
//         let body = req.body
//         if(body.name != null || body.name != undefined){
//             product.name = body.name
//         }
//         await product.save()
//         res.json(product)
//     } catch (error) {
//         res.json({message: error.message})
//     }
// })

module.exports = router