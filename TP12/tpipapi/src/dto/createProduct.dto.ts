import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    readonly categoryId: string;

    @IsNotEmpty()
    @IsString()
    readonly itemId: string;

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly imageSrc: string;

    @IsOptional()
    @IsString()
    readonly description: string;
    
}