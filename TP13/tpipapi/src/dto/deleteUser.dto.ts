import { IsNotEmpty, IsString } from "class-validator";

export class DeleteUser {
    @IsNotEmpty()
    @IsString()
    readonly _id: string;
    
}