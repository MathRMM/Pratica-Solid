import { Category } from "../../models/Category";
import { Category as CategoryPrisma } from "@prisma/client";

export abstract class AbstractCategoryRepository<t> {
  abstract create({ name }: Category<t>): Promise<Category<t>>;
  abstract getAll(): Promise<Category<t>[] | null>;
  abstract update({ id, name }: Category<t>): Promise<Category<t>>;
  abstract delete({ id }: Category<t>): Promise<void>;
}
