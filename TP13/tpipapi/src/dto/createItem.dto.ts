import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateItemDto {
    @IsNotEmpty()
    @IsString()
    readonly categoryId: string;

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsString()
    readonly description: string;
    
}