import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Product } from 'src/product/schema/product.schema';
import { Price } from './schema/price.schema';
import { CreatePriceDto } from 'src/dto/createPrice.dto';
import { UpdatePriceDto } from 'src/dto/updatePrice.dto';

@Injectable()
export class PriceService {
    constructor (@InjectModel(Product.name) private productModel: Model<Product>, @InjectModel(Price.name) private priceModel: Model<Price>){}

    async create (createPriceDto: CreatePriceDto): Promise<Price> {
        const { price, shop, productId } = createPriceDto
        
        try {
            let price = await this.productModel.findById(productId)
            if(price == null){
                throw new HttpException({ success: false, message: "Input productId does not exist" }, HttpStatus.NOT_FOUND);
            }
            
        } catch (error) {
            throw new HttpException({ success: false, message: error.message }, HttpStatus.NOT_FOUND);
        }
        return await this.priceModel.create({ price, shop, productId })
    }

    async deleteById (id: string): Promise<any> {
        try {
            const price = await this.priceModel.findById(id)
            await price.deleteOne()
            return {
                success: true,
                message: "Price was deleted"
            }
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    async findAll(): Promise<Price[]> {
        return await this.priceModel.find()
    }

    async findById(id: string): Promise<Price> {
        return await this.priceModel.findById(id)
    }
    
    async update(updatePriceDto: UpdatePriceDto): Promise<Price> {
        let price = await this.priceModel.findById(updatePriceDto._id)
        if(updatePriceDto.productId) {
            price.productId = new Types.ObjectId(updatePriceDto.productId)
        }
        if(updatePriceDto.shop){
            price.shop = updatePriceDto.shop
        }
        if(updatePriceDto.price) {
            price.price = updatePriceDto.price
        }
        return await price.save()
    }
}
