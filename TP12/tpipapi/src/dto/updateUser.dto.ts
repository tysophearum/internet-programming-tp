import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
    @IsNotEmpty()
    @IsString()
    readonly _id: string;

    @IsOptional()
    @IsString()
    readonly username: string;

    @IsOptional()
    @IsEmail()
    readonly email: string;

    @IsOptional()
    @IsString()
    readonly password: string;

    @IsOptional()
    @IsString()
    readonly firstname: string;

    @IsOptional()
    @IsString()
    readonly lastname: string;
    
}