import prisma from "../../../config/database";
import { Category } from "../../../models/Category";
import { AbstractCategoryRepository } from "../AbstractCategoryRepository";

type CategoryPrisma = Category<number>

export class CategoryRepositoryPg
  implements AbstractCategoryRepository<number>
{

  async create({ name }: CategoryPrisma): Promise<CategoryPrisma> {
    return await prisma.category.create({
      data: {
        name,
      },
    });
  }

  async getAll(): Promise<CategoryPrisma[] | null> {
    return await prisma.category.findMany();
  }

  async update({ id, name }: CategoryPrisma): Promise<CategoryPrisma> {
    return await prisma.category.update({
      where: { id },
      data: { name },
    });
  }

  async delete({ id }: CategoryPrisma): Promise<void> {
    await prisma.category.delete({
      where: { id }
    })
  }
}
