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

    deleteOne(data: IProduct) {
        console.log(data)
        return this.productModel.deleteOne(data);
    }
}

export default ProductDao;