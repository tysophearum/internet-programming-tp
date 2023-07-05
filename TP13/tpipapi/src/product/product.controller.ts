import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schema/product.schema';
import { CreateProductDto } from 'src/dto/createProduct.dto';
import { UpdateProductDto } from 'src/dto/updateProduct.dto';
import { DeleteProductDto } from 'src/dto/deleteProduct.dto';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Post('create')
    async create(@Body() product: CreateProductDto): Promise<Product> {
        return await this.productService.create(product)
    }

    @Post('update')
    async updateById(@Body() product: UpdateProductDto) {
        return await this.productService.update(product)
    }

    @Get('all')
    async findAll(): Promise<Product[]> {
        return await this.productService.findAll()
    }

    @Get('find/:id')
    async findByiD(@Param() param: any): Promise<Product> {
        return await this.productService.findById(param.id)
    }

    @Post('delete')
    async deleteById(@Body() body: DeleteProductDto): Promise<any> {
        return await this.productService.deleteById(body._id)
    }

    @Get('find/detail/:id')
    async findAllWithItems(@Param() param: any): Promise<any> {
        return await this.productService.getProductDetail(param.id)
    }
}
