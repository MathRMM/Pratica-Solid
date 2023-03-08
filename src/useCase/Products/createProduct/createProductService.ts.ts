import { Products } from "../../../models/Product";

export class CreateProductService{
  constructor(props: Products){}
  
  save(product: Products){
    return 'ok'
  }
}