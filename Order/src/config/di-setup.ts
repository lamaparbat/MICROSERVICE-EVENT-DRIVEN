import { InjectionMode, asClass, asValue, createContainer } from "awilix"
import OrderDao from "../data/dao/order";
import RabbitMq from "../services/rabbitMq";
import OrderService from "../services/order";
import OrderModel from "../data/models/order";
import OrderController from "../controllers/order";
import OrderRepository from "../data/repositories/order";


const container = createContainer({ injectionMode: InjectionMode.PROXY });

const setupDI = () => {
    container.register({
        RabbitMq: asClass(RabbitMq),
        OrderDao: asClass(OrderDao),
        OrderModel: asValue(OrderModel),
        OrderService: asClass(OrderService),
        OrderController: asClass(OrderController),
        OrderRepository: asClass(OrderRepository),
    });

    console.log("Container registered successfully!");
}

setupDI();
export { setupDI, container };