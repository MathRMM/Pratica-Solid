import { CategoryRepositoryPg } from "../../../repository/Category/PG/CategoryRepository";
import { CreateCategoryController } from "./createCategoryController";
import { CreateCategoryService } from "./createCategoryService";

const categoryRepository = new CategoryRepositoryPg();
const createCategoryService = new CreateCategoryService(categoryRepository)
export const createCategoryController = new CreateCategoryController(createCategoryService)