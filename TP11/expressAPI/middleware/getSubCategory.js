const SubCategory = require("../models/subCategory")
const Category = require("../models/category")

async function getSubCategory(req, res, next) {
    try {
        let categoryID = req.body.categoryID
        let category = await Category.findById(categoryID)
        if (category == null) {
            return res.json({message: "Category does not exist"})
        }
        else {
            res.subCategory = new SubCategory({
                categoryID: categoryID,
                name: req.body.name,
                description: req.body.description
            })
            next()
        }
    } catch (error) {
        return res.json({message: error.message})
    }
}

module.exports = getSubCategory