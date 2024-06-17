import { Request, Response } from "express";
import { IOrder, IProduct } from "../shared/types";


class ProductController {
    productService: any;

    constructor({ ProductService }: { ProductService: any }) {
        this.productService = ProductService;

        this.addProduct = this.addProduct.bind(this);
        this.buyProduct = this.buyProduct.bind(this);
        this.getProducts = this.getProducts.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    async getProducts(req: Request, res: Response) {
        try {
            const result = await this.productService.getProducts();

            if (result?.error) return res.status(400).send(result);
            res.send(result);
        } catch (error: any) {
            console.error(error);
            res.send({ data: null, error: error?.message });
        }
    }

    async addProduct(req: Request, res: Response) {
        try {
            const payload: IProduct = req.body;
            const result = await this.productService.addProduct(payload);

            if (result?.error) return res.status(400).send(result);
            res.send(result);
        } catch (error: any) {
            console.error(error);
            res.send({ data: null, error: error?.message });
        }
    }

    async deleteProduct(req: Request, res: Response) {
        try {
            const { productId } = req.query;

            const result = await this.productService.deleteProduct(productId);

            if (result?.error) return res.status(400).send(result);
            res.send(result);
        } catch (error: any) {
            console.error(error);
            res.send({ data: null, error: error?.message });
        }
    }


    async buyProduct(req: Request, res: Response) {
        try {
            const payload: IOrder = req.body;
            const result = await this.productService.buyProduct(payload);

            if (result?.error) return res.status(400).send(result);
            res.send(result);
        } catch (error: any) {
            console.error(error);
            res.send({ data: null, error: error?.message });
        }
    }

}


export default ProductController;