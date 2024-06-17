import { Router } from "express";
import { container } from "../config/di-setup";


const productRoutes = Router();
const productController = container.resolve("ProductController");

productRoutes.get('/products', productController.getProducts);
productRoutes.post('/product', productController.addProduct);
productRoutes.delete('/product', productController.deleteProduct);
productRoutes.post('/product/buy', productController.buyProduct);

export default productRoutes;