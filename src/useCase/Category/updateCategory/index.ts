import { CategoryRepositoryPg } from "../../../repository/Category/PG/CategoryRepository";
import { UpdateCategoryService } from "./updateCategoryService";
import { UpdateCategoryController } from "./updateCategoryController";

const categoryRepository = new CategoryRepositoryPg();
const updateCategoryService = new UpdateCategoryService(categoryRepository);
export const updateCategoryController = new UpdateCategoryController(
  updateCategoryService
);
