import { IProduct } from "../shared/types";


class ProductService {
    productRepository: any;

    constructor({ ProductRepository }: { ProductRepository: any }) {
        this.productRepository = ProductRepository;
        this.getProducts = this.getProducts.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }

    async getProducts() {
        try {
            const res = await this.productRepository.find();
            return { data: res, error: null };
        } catch (error: any) {
            return { data: null, error: error?.message };
        }
    }

    async addProduct(data: IProduct) {
        try {
            const res = await this.productRepository.create(data);
            return { data: res, error: null };
        } catch (error: any) {
            return { data: null, error: error?.message };
        }
    }
}

export default ProductService;