const express = require("express")
const router = express.Router()
const checkAuthenticationUsing = require("../middleware/checkAuthenticationUsing")
const Category = require("../models/category")
const SubCategory = require("../models/subCategory")

router.post("/create", async (req, res) => {
    try {
        let category = new Category({
            name: req.body.name,
            description: req.body.description
        })
        await category.save()
        res.json(category)
    } catch (error) {
        res.json({message: error.message})
    }
})

router.get("/get/all", async (req, res) => {
    try {
        let categories = await Category.find()
        res.json(categories)
    } catch (error) {
        res.json({message: error.message})
    }
})

router.get("/get/:id", async (req, res) => {
    try {
        let category = await Category.findById(req.params.id)
        res.json(category)
    } catch (error) {
        res.json({message: error.message})
    }
})

router.post("/edit/:id", async (req, res) => {
    try {
        let category = await Category.findById(req.params.id)
        let body = req.body
        if(body.name != null || body.name != undefined){
            category.name = body.name
        }
        if(body.description != null || body.description != undefined){
            category.description = body.description
        }
        await category.save()
        res.json(category)
    } catch (error) {
        res.json({message: error.message})
    }
})

router.delete("/delete/:id", async (req, res) => {
    try {
        let category = Category.findById(req.params.id)
        category.deleteOne()
        res.json({message: "Category deleted"})
    } catch (error) {
        res.json({message: error.message})
    }
})

router.get("/get/all/subCategory", async (req, res) => {
    let data = await Category.aggregate([
        {
            $lookup: {
                from: "subcategories",
                localField: "_id",
                foreignField: "categoryID",
                as: "subCategories"
            }
        }
    ])
    res.json(data)
})

module.exports = router