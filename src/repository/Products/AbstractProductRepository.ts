import { Products } from "../../models/Product";

export abstract class AbstractProductsRepository<t> {
    abstract create({product, categoryId}: Products):void;
}