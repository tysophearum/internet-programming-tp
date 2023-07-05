import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateCategoryDto {
    @IsNotEmpty()
    @IsString()
    readonly _id: string;

    @IsOptional()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsString()
    readonly description: string;
    
    
}