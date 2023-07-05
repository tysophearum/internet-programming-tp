import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePriceDto {
    @IsNotEmpty()
    @IsString()
    readonly productId: string;

    @IsNotEmpty()
    @IsString()
    readonly shop: string;

    @IsNotEmpty()
    @IsNumber()
    readonly price: number;
    
}