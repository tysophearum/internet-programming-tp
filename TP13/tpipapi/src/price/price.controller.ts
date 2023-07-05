import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { PriceService } from './price.service';
import { CreatePriceDto } from 'src/dto/createPrice.dto';
import { Price } from './schema/price.schema';
import { UpdatePriceDto } from 'src/dto/updatePrice.dto';
import { DeletePriceDto } from 'src/dto/deletePrice.dto';

@Controller('price')
export class PriceController {
    constructor(private priceService: PriceService) {}

    @Post('create')
    async create(@Body() price: CreatePriceDto): Promise<Price> {
        return await this.priceService.create(price)
    }

    @Post('update')
    async updateById(@Body() price: UpdatePriceDto) {
        return await this.priceService.update(price)
    }

    @Get('all')
    async findAll(): Promise<Price[]> {
        return await this.priceService.findAll()
    }

    @Get(':id')
    async findByiD(@Param() id: string): Promise<Price> {
        return await this.priceService.findById(id)
    }

    @Post('delete')
    async deleteById(@Body() body: DeletePriceDto): Promise<any> {
        return await this.priceService.deleteById(body._id)
    }
}
