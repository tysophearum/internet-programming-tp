const express = require("express")
const router = express.Router()
const checkAuthenticationUsing = require("../middleware/checkAuthenticationUsing")
const SubCategory = require("../models/subCategory")
const getSubCategory = require("../middleware/getSubCategory")
const { error } = require("../validation/userValidation")

router.post("/create", getSubCategory, async (req, res) => {
    try {
        let subCategory = res.subCategory
        await subCategory.save()
        res.json(subCategory)
    } catch (error) {
        res.json({message: error.message})
    }
})

router.get("/get/all", async (req, res) => {
    try {
        res.json(await SubCategory.find())
    } catch (error) {
        res.json({mssage: error.message})
    }
})

router.get("/get/:id", async (req, res) => {
    try {
        let subCategory = await SubCategory.findById(req.params.id)
        res.json(subCategory)
    } catch (error) {
        res.json({message: error.message})
    }
})

router.get("/get/category/:id", async (req, res) => {
    try {
        await SubCategory.find({categoryID: req.params.id})
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
//         let subCategory = await SubCategory.findById(req.params.id)
//         let body = req.body
//         if(body.name != null || body.name != undefined){
//             subCategory.name = body.name
//         }
//         await subCategory.save()
//         res.json(subCategory)
//     } catch (error) {
//         res.json({message: error.message})
//     }
// })

module.exports = router