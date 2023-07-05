import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Item } from './schema/item.schema';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateItemDto } from 'src/dto/createItem.dto';
import { UpdateItemDto } from 'src/dto/updateItem.dto';
import { Category } from 'src/category/schema/category.schema';
import { Product } from 'src/product/schema/product.schema';

@Injectable()
export class ItemService {
    constructor (@InjectModel(Item.name) private itemModel: Model<Item>, @InjectModel(Category.name) private categoryModel: Model<Category>, @InjectModel(Product.name) private productModel: Model<Product>){}

    async create (createItemDto: CreateItemDto): Promise<Item> {
        const { categoryId, name, description } = createItemDto
        try {
            let category = await this.categoryModel.findById(categoryId)
            if(category == null){
                throw new HttpException({ success: false, message: "Input categoryId does not exist" }, HttpStatus.NOT_FOUND);
            }
            
        } catch (error) {
            throw new HttpException({ success: false, message: error.message }, HttpStatus.NOT_FOUND);
        }
        return await this.itemModel.create({ categoryId, name, description })
    }

    async deleteById (id: string): Promise<any> {
        try {
            const item = await this.itemModel.findById(id)
            this.productModel.deleteMany({itemId: item._id})
            await item.deleteOne()
            return {
                success: true,
                message: "Item was deleted"
            }
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    async findAll(): Promise<Item[]> {
        return await this.itemModel.find()
    }

    async findById(id: string): Promise<Item> {
        return await this.itemModel.findById(id)
    }
    
    async update(UpdateItemDto: UpdateItemDto): Promise<Item> {
        let item = await this.itemModel.findById(UpdateItemDto._id)
        if(UpdateItemDto.categoryId) {
            item.categoryId = new Types.ObjectId(UpdateItemDto.categoryId)
        }
        if(UpdateItemDto.name){
            item.name = UpdateItemDto.name
        }
        if(UpdateItemDto.description) {
            item.description = UpdateItemDto.description
        }
        return await item.save()
    }
}
