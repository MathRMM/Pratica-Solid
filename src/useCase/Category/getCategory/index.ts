import { CategoryRepositoryPg } from "../../../repository/Category/PG/CategoryRepository";
import { GetCategoryService } from "./getCategoryService";
import { GetCategoryController } from "./getCategoryController";

const categoryRepositoryPg = new CategoryRepositoryPg();
const getCategoryService = new GetCategoryService(categoryRepositoryPg)
export const getCategoryController = new GetCategoryController(getCategoryService);