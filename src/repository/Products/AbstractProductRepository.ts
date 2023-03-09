import { Products } from "../../models/Product";

export abstract class AbstractProductsRepository<T> {
  abstract create({ product, categoryId }: Products<T>): Promise<Products<T>>;
  abstract getAll(): Promise<Products<T>[]>;
  abstract get({ id }: Products<T>): Promise<Products<T>>;
  abstract update({
    id,
    product,
    categoryId,
  }: Products<T>): Promise<Products<T>>;
  abstract delete({ id }: Products<T>): Promise<Products<T>>;
}
