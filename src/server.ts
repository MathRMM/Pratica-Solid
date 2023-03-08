import express, { json } from "express";
import cors from "cors";

import { productRoutes } from "./router/product.routes";

const app = express();
app.use(cors());
app.use(json());

app.use("/product", productRoutes);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server listening on port ${port}`));
