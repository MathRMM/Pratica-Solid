import { Category } from "@prisma/client";
import { CategoryRepositoryPg } from "../../../repository/Category/PG/CategoryRepository";

export class GetCategoryService {
  private categoryRepositoryPg: CategoryRepositoryPg;
  constructor(categoryRepositoryPg: CategoryRepositoryPg) {
    this.categoryRepositoryPg = categoryRepositoryPg;
  }

  async getAll(){
    return await this.categoryRepositoryPg.getAll();
  }
}
