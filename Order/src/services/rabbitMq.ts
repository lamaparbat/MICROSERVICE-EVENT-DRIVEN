import amqp, { Channel, Connection } from "amqplib";
import config from "../config";
import { container } from "../config/di-setup";
import { ORDER_ENUM } from "../shared/constants";

class RabbitMq {
    private channel!: Channel;
    private connection!: Connection;

    constructor() {
        this.init();
    }

    async init() {
        this.connection = await amqp.connect(config.AMQP_URI);
        this.channel = await this.connection.createChannel();
        await this.channel.assertQueue(ORDER_ENUM.BUY_PRODUCT);

        this.eventListener();
    }

    private async eventListener() {
        this.channel.consume(ORDER_ENUM.BUY_PRODUCT, async (data: any) => {
            const parseOrder = JSON.parse(data?.content);
            const OrderService = container.resolve("OrderService");

            await OrderService.addOrder(parseOrder);
            this.channel.ack(data);
        });
    }
}

export default RabbitMq;