import amqp from "amqplib";
import mongoose from "mongoose"
import config from "../config";
import { PRODUCT_ENUM } from "./constants";

let amqpChannel: any;

const initConnection = async () => {
    try {
        await mongoose.connect(config.MONGO_URI);

        const connection = await amqp.connect(config.AMQP_URI);
        amqpChannel = await connection.createChannel();

        
        (await amqpChannel).assertQueue(PRODUCT_ENUM.BUY_PRODUCT);
    } catch (error) {
        console.error(error);
    }
}

export {
    amqpChannel,
    initConnection,
}