import { amqpChannel } from "../shared/bootstrap";
import { PRODUCT_ENUM } from "../shared/constants";
import { IOrder, IProduct } from "../shared/types";


class ProductService {
    productRepository: any;

    constructor({ ProductRepository }: { ProductRepository: any }) {
        this.productRepository = ProductRepository;
        this.buyProduct = this.buyProduct.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.getProducts = this.getProducts.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
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

    async deleteProduct(productId: string) {
        try {
            const query = {
                _id: productId
            }
            const res = await this.productRepository.deleteOne(query);
            return { data: res, error: null };
        } catch (error: any) {
            return { data: null, error: error?.message };
        }
    }
    
    async buyProduct(data: IOrder) {
        try {
            const queueMsg = Buffer.from(JSON.stringify(data));
            amqpChannel.sendToQueue(
                PRODUCT_ENUM.BUY_PRODUCT,
                queueMsg
            );

            console.log("Product sent")
            return { data: [], error: null };
        } catch (error: any) {
            return { data: null, error: error?.message };
        }
    }
}

export default ProductService;