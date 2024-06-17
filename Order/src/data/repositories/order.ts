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

    deleteOne(data: IOrder) {
        return this.orderDao.deleteOne(data);
    }
}

export default OrderRepository;