import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../user/schema/user.schema';
import { Model } from 'mongoose';
import { RegisterDto } from 'src/dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from 'src/dto/login.dto';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    async hashPassword(password: string): Promise<string> {
        const saltRounds = 10; // Number of salt rounds for bcrypt to generate
      
        // Generate a salt
        const salt = await bcrypt.genSalt(saltRounds);
      
        // Hash the password using the generated salt
        const hashedPassword = await bcrypt.hash(password, salt);
      
        return hashedPassword;
    }

    async verifyPassword(plainPassword: string, encryptedPassword: string): Promise<boolean> {
        // Compare the plain password with the encrypted password
        const passwordMatch = await bcrypt.compare(plainPassword, encryptedPassword);
      
        return passwordMatch;
    }
    async register(registerDto: RegisterDto): Promise<User> {
        const { firstname, lastname, username, email, password } = registerDto
        const newUser = { firstname, lastname, username, email, password }
        newUser.password = await this.hashPassword(newUser.password)
        return await this.userModel.create(newUser);
    }

    async login(login: LoginDto): Promise<any> {
        let loginStatus
        
        try {
            const loginUser = await this.userModel.findOne({username: login.username})
            let status = await this.verifyPassword(login.password, loginUser.password)
            
            if(status){
                loginStatus = {
                    success: true,
                    message: "You are logged in!!!"
                }

            }
            else {
                loginStatus = {
                    success: false,
                    message: "Incorect password for user " + loginUser.username + "!!!"
                }
            }
        } catch (error) {
            loginStatus = {
                success: false,
                message: "Incorect username!!!"
            }
        }
        return loginStatus
    }
}
