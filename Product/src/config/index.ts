import { IConfig } from "../shared/types";


export const developmentConfig: IConfig = {
    PORT: process.env.PORT || 8080,
    NODE_ENV: process.env.NODE_ENV || 'development',
    MONGO_URI: process.env.MONGO_URI || ''
}

const config = developmentConfig;

export default config