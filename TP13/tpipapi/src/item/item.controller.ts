import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from './schema/item.schema';
import { CreateItemDto } from 'src/dto/createItem.dto';
import { UpdateItemDto } from 'src/dto/updateItem.dto';
import { DeleteItemDto } from 'src/dto/deleteItem.dto';

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

    @Get('find/:id')
    async findByiD(@Param() param: any): Promise<Item> {
        return await this.itemService.findById(param.id)
    }

    @Post('delete')
    async deleteById(@Body() body: DeleteItemDto): Promise<any> {
        return await this.itemService.deleteById(body._id)
    }
}
