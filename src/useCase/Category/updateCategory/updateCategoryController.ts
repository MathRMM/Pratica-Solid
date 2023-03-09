import { Request, Response } from "express";
import { UpdateCategoryService } from "./updateCategoryService";
import { Category } from "../../../models/Category";

export class UpdateCategoryController {
  constructor(private updateCategoryService: UpdateCategoryService) {
    this.handle = this.handle.bind(this);
  }

  async handle(req: Request, res: Response) {
    const { id, name }: Category<number> = req.body;

    try {
      const response = await this.updateCategoryService.update({ id, name });
      return res.sendStatus(200)
    } catch (error) {
      return res.sendStatus(500)
    }
  }
}
