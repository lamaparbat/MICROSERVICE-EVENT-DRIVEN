import { Request, Response } from "express";
import { IOrder } from "../shared/types";


class OrderController {
    orderService: any;

    constructor({ OrderService }: { OrderService: any }) {
        this.orderService = OrderService;

        this.getOrders = this.getOrders.bind(this);
        this.addOrder = this.addOrder.bind(this);
    }

    async getOrders(req: Request, res: Response) {
        try {
            const result = await this.orderService.getOrders();

            if (result?.error) return res.status(400).send(result);
            res.send(result);
        } catch (error) {
            console.error(error);
            res.send({ data: null, error: error });
        }
    }

    async addOrder(req: Request, res: Response) {
        try {
            const payload: IOrder = req.body;
            const result = await this.orderService.addOrder(payload);

            if (result?.error) return res.status(400).send(result);
            res.send(result);
        } catch (error) {
            console.error(error);
            res.send({ data: null, error: error });
        }
    }
}


export default OrderController;