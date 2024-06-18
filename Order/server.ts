import dotenv from "dotenv";
dotenv.config();

import app from "./src/app";
import config from "./src/config";
import initConnection from "./src/shared/bootstrap";

initConnection().then(async () => {
    app.listen(config.PORT, () => {
        console.log(`${process.env.NODE_ENV} Order Server has started at port ${config.PORT}....`);
    });
});