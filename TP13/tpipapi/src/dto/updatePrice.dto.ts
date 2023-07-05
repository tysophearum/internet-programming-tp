import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdatePriceDto {
    @IsNotEmpty()
    @IsString()
    readonly _id: string;

    @IsOptional()
    @IsString()
    readonly productId: string;

    @IsOptional()
    @IsString()
    readonly shop: string;

    @IsOptional()
    @IsNumber()
    readonly price: number;
    
}