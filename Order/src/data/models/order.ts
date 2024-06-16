import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    productIds: Array,
});

const OrderModel = mongoose.model('Order', orderSchema);

export default OrderModel;