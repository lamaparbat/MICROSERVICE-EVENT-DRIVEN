import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    price: Number,
});

const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel;