import { IsNotEmpty, IsString } from "class-validator";

export class DeleteItemDto {
    @IsNotEmpty()
    @IsString()
    readonly _id: string;
    
    
}