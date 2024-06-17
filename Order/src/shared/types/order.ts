export type IProduct = {
    _id?: string;
    name: string;
    quantity: number;
    price: number;
}

export type IOrder = {
    products: IProduct[];
    total: number;
    paymentStatus: string;
}