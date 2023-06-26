const mongoose = require("mongoose")

const subCategorySchema = new mongoose.Schema({
    categoryID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model("SubCategory", subCategorySchema)