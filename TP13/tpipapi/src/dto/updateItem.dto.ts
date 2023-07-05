import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateItemDto {
    @IsNotEmpty()
    @IsString()
    readonly _id: string;

    @IsOptional()
    @IsString()
    readonly categoryId: string;

    @IsOptional()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsString()
    readonly description: string;
    
}