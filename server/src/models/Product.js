const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = mongoose.Schema(
    {
        product_no:{
            type: Number,
            unique: true //상품고유번호
        },
        title: {
            type: String,
            default: "test title"
            //required: true
        },
        description: {
            type: String,
            default:"test description"
            //required: true
        },
        category:{
            type: String,
            //required: true
            default:"default"
        },
        price: {
            type: Number,
            //required: true
            default:"10000"
        },
        company:{
            type: String,
            required: false
        },
        image : { 
            type: String,
           },
        create_at: {
            type: Date,
            default: Date.now
        },
    }
);


const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product };
