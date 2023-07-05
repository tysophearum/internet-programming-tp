import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";
import { Category } from "src/category/schema/category.schema";

@Schema({
    timestamps: true
})
export class Item {
    @Prop({ type: SchemaTypes.ObjectId, ref: Category.name })
    categoryId: Types.ObjectId

    @Prop()
    name: string

    @Prop()
    description: string
}

export const ItemSchema = SchemaFactory.createForClass(Item)