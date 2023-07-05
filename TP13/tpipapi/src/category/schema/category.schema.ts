import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class Category {
    @Prop()
    name: string

    @Prop()
    description: string
}

export const CategorySchema = SchemaFactory.createForClass(Category)