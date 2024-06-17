import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    products: Array,
    total: Number,
    paymentStatus: String,
});

const OrderModel = mongoose.model('Order', orderSchema);

export default OrderModel;