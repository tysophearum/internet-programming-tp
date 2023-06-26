const SubCategory = require("../models/subCategory")
const Product = require("../models/product")
const Category = require("../models/category")

async function getProduct(req, res, next) {
    try {
        let subCategoryID = req.body.subCategoryID
        let subCategory = await SubCategory.findById(subCategoryID)

        let categoryID = req.body.categoryID
        let category = await Category.findById(categoryID)

        if (subCategory == null) {
            return res.json({message: "Sub category does not exist"})
        }
        else if (category == null){
            return res.json({message: "Category does not exist"})
        }
        else {
            res.product = new Product({
                categoryID: categoryID,
                subCategoryID: subCategoryID,
                name: req.body.name,
                description: req.body.description,
                imageSrc: req.body.imageSrc
            })
            next()
        }
    } catch (error) {
        return res.json({message: error.message})
    }
}

module.exports = getProduct