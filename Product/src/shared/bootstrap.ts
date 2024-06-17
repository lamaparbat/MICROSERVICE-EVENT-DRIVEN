import mongoose from "mongoose"
import config from "../config";
import { container } from "../config/di-setup";

let amqpChannel: any;

const initConnection = async () => {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log("Mongodb connection established.");

        const RabbitMq = container.resolve("RabbitMq");
        await RabbitMq.init();
        console.log("RabbitMQ connection established.");
    } catch (error) {
        console.error(error);
    }
}

export {
    amqpChannel,
    initConnection,
}