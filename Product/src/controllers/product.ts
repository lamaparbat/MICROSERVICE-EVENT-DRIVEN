import { Request, Response } from "express";
import { IProduct } from "../shared/types";


class ProductController {
    productService: any;

    constructor({ ProductService }: { ProductService: any }) {
        this.productService = ProductService;

        this.getProducts = this.getProducts.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }

    async getProducts(req: Request, res: Response) {
        try {
            const result = await this.productService.getProducts();

            if (result?.error) return res.status(400).send(result);
            res.send(result);
        } catch (error) {
            console.error(error);
            res.send({ data: null, error: error });
        }
    }

    async addProduct(req: Request, res: Response) {
        try {
            const payload: IProduct = req.body;
            const result = await this.productService.addProduct(payload);

            if (result?.error) return res.status(400).send(result);
            res.send(result);
        } catch (error) {
            console.error(error);
            res.send({ data: null, error: error });
        }
    }
}


export default ProductController;