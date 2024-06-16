import mongoose from "mongoose"
import config from "../config";

export const initConnection = async () => {
    try {
        await mongoose.connect(config.MONGO_URI);
    } catch (error) {
        console.error(error);
    }
}