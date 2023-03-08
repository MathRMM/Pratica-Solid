
import { Category } from '../../models/Category';

export abstract class AbstractCategoryRepository<t> {
    abstract create({ name }: Category):void;
}