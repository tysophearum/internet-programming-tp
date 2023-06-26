import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schema/product.schema';
import { Model, Types } from 'mongoose';
import { Item } from 'src/item/schema/item.schema';
import { Category } from 'src/category/schema/category.schema';
import { CreateProductDto } from 'src/dto/createProduct.dto';
import { UpdateProductDto } from 'src/dto/updateProduct.dto';

@Injectable()
export class ProductService {
    constructor (@InjectModel(Item.name) private itemModel: Model<Item>, @InjectModel(Category.name) private categoryModel: Model<Category>, @InjectModel(Product.name) private productModel: Model<Product>){}

    async create (createProductDto: CreateProductDto): Promise<Product> {
        const { categoryId, itemId, name, description, imageSrc } = createProductDto
        try {
            let category = await this.categoryModel.findById(categoryId)
            if(category == null){
                throw new HttpException({ success: false, message: "Input categoryId does not exist" }, HttpStatus.NOT_FOUND);
            }

            let item = await this.itemModel.findById(itemId)
            if(item == null){
                throw new HttpException({ success: false, message: "Input itemId does not exist" }, HttpStatus.NOT_FOUND);
            }
        } catch (error) {
            throw new HttpException({ success: false, message: error.message }, HttpStatus.NOT_FOUND);
        }
        return await this.productModel.create({ categoryId, itemId, name, description, imageSrc })
    }

    async deleteById (id: string): Promise<any> {
        try {
            const product = await this.productModel.findById(id)
            await product.deleteOne()
            return {
                success: true,
                message: "Product was deleted"
            }
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    async findAll(): Promise<Product[]> {
        return await this.productModel.find()
    }

    async findById(id: string): Promise<Product> {
        return await this.productModel.findById(id)
    }
    
    async update(updateProductDto: UpdateProductDto): Promise<Product> {
        let product = await this.productModel.findById(updateProductDto._id)
        if(updateProductDto.categoryId) {
            product.categoryId = new Types.ObjectId(updateProductDto.categoryId)
        }
        if(updateProductDto.name){
            product.name = updateProductDto.name
        }
        if(updateProductDto.description) {
            product.description = updateProductDto.description
        }
        if(updateProductDto.itemId) {
            product.itemId = new Types.ObjectId(updateProductDto.itemId)
        }
        if(updateProductDto.imageSrc) {
            product.imageSrc = updateProductDto.imageSrc
        }
        
        return await product.save()
    }
}
