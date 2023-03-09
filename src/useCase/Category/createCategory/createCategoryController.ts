import { Request, Response } from "express";
import { Category } from "../../../models/Category";
import { CreateCategoryService } from "./createCategoryService";

export class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {
    this.handle = this.handle.bind(this)
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { name }: Category<null> = req.body;
    try {
      await this.createCategoryService.create({ name });
      return res.sendStatus(201);
    } catch (error) {
      console.log(error)
      return res.status(404).send(error)
    }
  }
}
