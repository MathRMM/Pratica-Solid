import { Request, Response } from "express";

export class CreateProductController {
  constructor() {}
  
  handle(req: Request, res: Response): Response {
    const { name, category } = req.body;
    //manda para o service
    return res.status(201).send({})
  }
}
