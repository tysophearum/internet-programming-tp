import { IsNotEmpty, IsString } from "class-validator";

export class DeletePriceDto {
    @IsNotEmpty()
    @IsString()
    readonly _id: string;
    
}