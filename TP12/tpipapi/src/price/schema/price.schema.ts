import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";
import { Product } from "src/product/schema/product.schema";

@Schema({
    timestamps: true
})
export class Price {
    @Prop({ type: SchemaTypes.ObjectId, ref: Product.name })
    productId: Types.ObjectId

    @Prop()
    shop: string

    @Prop()
    price: number
}

export const PriceSchema = SchemaFactory.createForClass(Price)