import { IProduct } from "../../shared/types";


class ProductDao {
    productModel: any;

    constructor({ ProductModel }: { ProductModel: any }) {
        this.productModel = ProductModel;
    }

    find() {
        return this.productModel.find();
    }

    create(data: IProduct) {
        return this.productModel.create(data);
    }
}

export default ProductDao;