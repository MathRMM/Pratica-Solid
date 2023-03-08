import prisma from "../../config/database";
import { Category } from "../../models/Category";
import { AbstractCategoryRepository } from "./AbstractCategoryRepository";

export class CategoryRepositoryPg extends AbstractCategoryRepository<Category> {
  constructor() {
    super();
  }

  async create({ name }: Category) {
    return await prisma.category.create({
      data: {
        name,
      },
    });
  }
}
