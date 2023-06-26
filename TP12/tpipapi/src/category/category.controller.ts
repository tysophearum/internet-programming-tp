import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from 'src/dto/createCategory.dto';
import { Category } from './schema/category.schema';
import { UpdateCategoryDto } from 'src/dto/updateCategory.dto';

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

    @Get(':id')
    async findByiD(@Param() id: string): Promise<Category> {
        return await this.categoryService.findById(id)
    }

    @Get(':id')
    async deleteByiD(@Param() id: string): Promise<any> {
        return await this.categoryService.deleteById(id)
    }

    @Get('all/items')
    async findAllWithItems(): Promise<any> {
        return await this.categoryService.getAllCategoriesWithItems()
    }
}
