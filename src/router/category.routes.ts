import { Router } from "express";
import { createCategoryController } from "../useCase/Category/createCategory";
import { getCategoryController } from '../useCase/Category/getCategory/index';
import { updateCategoryController } from "../useCase/Category/updateCategory";
const categoryRoutes = Router();

categoryRoutes
  .post("/", createCategoryController.handle)
  .get("/", getCategoryController.handle)
  .put("/", updateCategoryController.handle);

export { categoryRoutes };
