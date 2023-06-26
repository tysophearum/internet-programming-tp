import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product, ProductSchema } from './schema/product.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Item, ItemSchema } from 'src/item/schema/item.schema';
import { Category, CategorySchema } from 'src/category/schema/category.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]), MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }]), MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
