import { IOrder } from "../../shared/types";


class ProductDao {
    orderModel: any;

    constructor({ OrderModel }: { OrderModel: any }) {
        this.orderModel = OrderModel;
    }

    find() {
        return this.orderModel.find();
    }

    create(data: IOrder) {
        return this.orderModel.create(data);
    }
}

export default ProductDao;