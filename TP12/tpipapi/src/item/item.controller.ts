import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from './schema/item.schema';
import { CreateItemDto } from 'src/dto/createItem.dto';
import { UpdateItemDto } from 'src/dto/updateItem.dto';

@Controller('item')
export class ItemController {
    constructor(private itemService: ItemService) {}

    @Post('create')
    async create(@Body() item: CreateItemDto): Promise<Item> {
        return await this.itemService.create(item)
    }

    @Post('update')
    async updateById(@Body() item: UpdateItemDto) {
        return await this.itemService.update(item)
    }

    @Get('all')
    async findAll(): Promise<Item[]> {
        return await this.itemService.findAll()
    }

    @Get(':id')
    async findByiD(@Param() id: string): Promise<Item> {
        return await this.itemService.findById(id)
    }

    @Get(':id')
    async deleteById(@Param() id: string): Promise<any> {
        return await this.itemService.deleteById(id)
    }
}
