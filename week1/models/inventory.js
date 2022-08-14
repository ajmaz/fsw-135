const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// inventory schema
const inventorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }
})

module.exports = mongoose.model("item", movieSchema)