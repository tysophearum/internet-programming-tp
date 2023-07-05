import { IsNotEmpty, IsString } from "class-validator";

export class DeleteCategoryDto {
    @IsNotEmpty()
    @IsString()
    readonly _id: string;
    
    
}