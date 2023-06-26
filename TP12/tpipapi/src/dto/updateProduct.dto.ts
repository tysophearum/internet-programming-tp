import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateProductDto {
    @IsNotEmpty()
    @IsString()
    readonly _id: string;

    @IsOptional()
    @IsString()
    readonly categoryId: string;

    @IsOptional()
    @IsString()
    readonly itemId: string;

    @IsOptional()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsString()
    readonly imageSrc: string;

    @IsOptional()
    @IsString()
    readonly description: string;
    
}