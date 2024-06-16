import { IOrder } from "../shared/types";


class ProductService {
    orderRepository: any;

    constructor({ OrderRepository }: { OrderRepository: any }) {
        this.orderRepository = OrderRepository;
        this.getOrders = this.getOrders.bind(this);
        this.addOrder = this.addOrder.bind(this);
    }

    async getOrders() {
        try {
            const res = await this.orderRepository.find();
            return { data: res, error: null };
        } catch (error: any) {
            return { data: null, error: error?.message };
        }
    }

    async addOrder(data: IOrder) {
        try {
            const res = await this.orderRepository.create(data);
            return { data: res, error: null };
        } catch (error: any) {
            return { data: null, error: error?.message };
        }
    }
}

export default ProductService;