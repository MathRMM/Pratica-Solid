import { Router } from "express";
import { CreateProductController } from "../useCase/Products/createProduct/createProductController";

const productRoutes = Router()

productRoutes
  .post('/', new CreateProductController().handle)


export { productRoutes };