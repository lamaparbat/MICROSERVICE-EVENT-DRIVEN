import { Router } from "express";
import { container } from "../config/di-setup";


const orderRoutes = Router();
const orderController = container.resolve("OrderController");

orderRoutes.get('/orders', orderController.getOrders);
orderRoutes.post('/order', orderController.addOrder);

export default orderRoutes;