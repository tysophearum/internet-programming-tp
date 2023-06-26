import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";
import { Category } from "src/category/schema/category.schema";
import { Item } from "src/item/schema/item.schema";

@Schema({
    timestamps: true
})
export class Product {
    @Prop({ type: SchemaTypes.ObjectId, ref: Category.name })
    categoryId: Types.ObjectId

    @Prop({ type: SchemaTypes.ObjectId, ref: Item.name })
    itemId: Types.ObjectId

    @Prop()
    name: string

    @Prop()
    description: string

    @Prop()
    imageSrc: string
}

export const ProductSchema = SchemaFactory.createForClass(Product)