import { IOrder } from "../../shared/types";


class OrderRepository {
    orderDao: any;

    constructor({ OrderDao }: { OrderDao: string }) {
        this.orderDao = OrderDao;
    }

    find() {
        return this.orderDao.find();
    }

    create(data: IOrder) {
        return this.orderDao.create(data);
    }
}

export default OrderRepository;