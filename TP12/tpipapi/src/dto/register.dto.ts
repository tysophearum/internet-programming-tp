import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RegisterDto {
    @IsNotEmpty()
    @IsString()
    readonly username: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;

    @IsNotEmpty()
    @IsString()
    readonly firstname: string;

    @IsNotEmpty()
    @IsString()
    readonly lastname: string;
    
}