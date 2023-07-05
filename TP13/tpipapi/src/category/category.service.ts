import { Injectable } from '@nestjs/common';
import { Category } from './schema/category.schema';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCategoryDto } from 'src/dto/createCategory.dto';
import { UpdateCategoryDto } from 'src/dto/updateCategory.dto';

@Injectable()
export class CategoryService {
    constructor (@InjectModel(Category.name) private categoryModel: Model<Category>){}

    async create (createCategoryDto: CreateCategoryDto): Promise<Category> {
        const { name, description } = createCategoryDto
        return await this.categoryModel.create({ name, description })
    }

    async deleteById (id: string): Promise<any> {
        try {
            const category = await this.categoryModel.findById(id)
            await category.deleteOne()
            return {
                success: true,
                message: "Category was deleted"
            }
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    async findAll(): Promise<Category[]> {
        return await this.categoryModel.find()
    }

    async findById(id: string): Promise<Category> {
        return await this.categoryModel.findById(id)
    }
    
    async update(UpdateCategoryDto: UpdateCategoryDto): Promise<Category> {
        let category = await this.categoryModel.findById(UpdateCategoryDto._id)
        category.name = UpdateCategoryDto.name
        if(UpdateCategoryDto.description) {
            category.description = UpdateCategoryDto.description
        }
        return await category.save()
    }

    async getAllCategoriesWithItems(): Promise<any> {
        let data = await this.categoryModel.aggregate([
            {
                $lookup: {
                    from: "items",
                    localField: "_id",
                    foreignField: "categoryId",
                    as: "Items"
                }
            }
        ])
        return data
    }
}