import { Category } from "../../../models/Category";
import { CategoryRepositoryPg } from "../../../repository/Category/PG/CategoryRepository";

export class UpdateCategoryService {
  constructor(private categoryRepositoryPg: CategoryRepositoryPg) {}

  async update({ id, name }: Category<number>) {
    const response = await this.categoryRepositoryPg.update({ id, name });
    if(!response) throw new Error("Not Found")
    return response
  }
}
