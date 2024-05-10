import { Body, Controller,Delete,Get,Param,Patch,Post } from '@nestjs/common';
import { ProductService } from './product.service';


@Controller('product')
export class ProductController {
    constructor(private readonly prodService:ProductService){}
    @Post()
    addProduct(
        @Body('title') prodTitle:string,
        @Body('description') prodDesc:string,
        @Body('price') prodPrice:number
    ){
      const generatedId= this.prodService.insertProduct(prodTitle,prodDesc,prodPrice);
      return {id:generatedId}
    }

    @Get()
    getAllProducts(){
      return this.prodService.getProduct()
    }

    @Get(':id')
    getProduct(@Param('id') prodId:string){
      return this.prodService.getSingleProduct(prodId)
    }

    @Patch(':id')
    UpdateProduct(
      @Param('id') prodId:string,
      @Body('title') prodTitle:string,
      @Body('description') prodDesc:string,
      @Body('price') prodPrice:number

    ){
      this.prodService.updateProduct(prodId,prodTitle,prodDesc,prodPrice);
       return null 
    }


    @Delete(':id')
    removeProduct(@Param('id') prodId:string){
      this.prodService.deleteProduct(prodId)
      return null;
    }
}
