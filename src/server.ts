import express, { json } from "express";
import cors from "cors";

import { productRoutes } from "./router/product.routes";
import { categoryRoutes } from "./router/category.routes";

const app = express();
app.use(cors());
app.use(json());

app.use("/product", productRoutes);
app.use("/category", categoryRoutes);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server listening on port ${port}`));
