import { IsNotEmpty, IsString } from "class-validator";

export class UpdateUserPassword {
    @IsNotEmpty()
    @IsString()
    readonly _id: string;
    
    @IsNotEmpty()
    @IsString()
    readonly password: string;
    
}