import { Request, Response } from "express";
import { Category } from "../../../models/Category";
import { GetCategoryService } from "./getCategoryService";

export class GetCategoryController {
  private getCategoryService: GetCategoryService;

  constructor(getCategoryService: GetCategoryService) {
    this.getCategoryService = getCategoryService;
    this.handle = this.handle.bind(this)
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { name: string } = req.query;

    try {
      const response = await this.getCategoryService.getAll();
      return res.status(200).send(response);
    } catch (error) {
        console.log(error)
      return res.sendStatus(500);
    }
  }
}
