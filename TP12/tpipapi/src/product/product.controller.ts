import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schema/product.schema';
import { CreateProductDto } from 'src/dto/createProduct.dto';
import { UpdateProductDto } from 'src/dto/updateProduct.dto';

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

    @Get(':id')
    async findByiD(@Param() id: string): Promise<Product> {
        return await this.productService.findById(id)
    }

    @Get(':id')
    async deleteById(@Param() id: string): Promise<any> {
        return await this.productService.deleteById(id)
    }
}
