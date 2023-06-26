const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    categoryID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    subCategoryID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    imageSrc: {
        type: String
    }
})

module.exports = mongoose.model("Product", productSchema)