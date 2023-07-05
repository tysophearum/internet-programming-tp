import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { Item, ItemSchema } from './schema/item.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from 'src/category/schema/category.schema';
import { Product, ProductSchema } from 'src/product/schema/product.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }]), MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }]), MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  controllers: [ItemController],
  providers: [ItemService]
})
export class ItemModule {}
