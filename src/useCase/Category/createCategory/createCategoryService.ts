import { Category } from "../../../models/Category";
import { AbstractCategoryRepository } from "../../../repository/Category/AbstractCategoryRepository";

export class CreateCategoryService {
  constructor(private categoryRepository: AbstractCategoryRepository<number>) {}

  async create({ name }: Category<null>) {
    if(!name) throw new Error("Category already exist!");
    return await this.categoryRepository.create({ name });
  }
}
