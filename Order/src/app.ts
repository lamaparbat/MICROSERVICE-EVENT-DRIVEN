import cors from "cors";
import helmet from "helmet";
import express from "express";
import productRoutes from "./routes/order";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use([productRoutes]);

app.get("/", (req, res) => {
    res.send(`${process.env.NODE_ENV} Server has started....`);
});

export default app;