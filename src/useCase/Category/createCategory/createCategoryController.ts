import { Request, Response } from 'express';
import { Category } from '../../../models/Category';

export class CreateProductController {
  constructor(){}
  
  handle(req: Request, res: Response): Response{
    const { name }: Category = req.body
    //save on repository
    return res.sendStatus(201);
  }
}