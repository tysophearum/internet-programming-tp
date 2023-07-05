import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from 'src/dto/createCategory.dto';
import { Category } from './schema/category.schema';
import { UpdateCategoryDto } from 'src/dto/updateCategory.dto';
import { DeleteCategoryDto } from 'src/dto/deleteCategory.dto';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @Post('create')
    async create(@Body() category: CreateCategoryDto): Promise<Category> {
        return await this.categoryService.create(category)
    }

    @Post('update')
    async updateById(@Body() category: UpdateCategoryDto) {
        return await this.categoryService.update(category)
    }

    @Get('all')
    async findAll(): Promise<Category[]> {
        return await this.categoryService.findAll()
    }

    @Get('find/:id')
    async findByiD(@Param() param: any): Promise<Category> {
        
        return await this.categoryService.findById(param.id)
    }

    @Post('delete')
    async deleteById(@Body() body: DeleteCategoryDto): Promise<any> {
        return await this.categoryService.deleteById(body._id)
    }

    @Get('all/items')
    async findAllWithItems(): Promise<any> {
        return await this.categoryService.getAllCategoriesWithItems()
    }
}
