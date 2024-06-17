import { InjectionMode, asClass, asValue, createContainer } from "awilix"
import RabbitMq from "../services/rabbitMq";
import ProductDao from "../data/dao/ProductDao";
import ProductService from "../services/product";
import ProductModel from "../data/models/product";
import ProductController from "../controllers/product";
import ProductRepository from "../data/repositories/ProductRepository";


const container = createContainer({ injectionMode: InjectionMode.PROXY });

const setupDI = () => {
    container.register({
        RabbitMq: asClass(RabbitMq),
        ProductDao: asClass(ProductDao),
        ProductModel: asValue(ProductModel),
        ProductService: asClass(ProductService),
        ProductController: asClass(ProductController),
        ProductRepository: asClass(ProductRepository),
    });

    console.log("Container registered successfully!");
}

setupDI();
export { setupDI, container };