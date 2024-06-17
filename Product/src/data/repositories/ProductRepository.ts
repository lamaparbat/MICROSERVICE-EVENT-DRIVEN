import { IProduct } from "../../shared/types";


class ProductRepository {
    productDao: any;

    constructor({ ProductDao }: { ProductDao: string }) {
        this.productDao = ProductDao;
    }

    find() {
        return this.productDao.find();
    }

    create(data: IProduct) {
        return this.productDao.create(data);
    }

    deleteOne(data: string) {
        return this.productDao.deleteOne(data);
    }
}

export default ProductRepository;