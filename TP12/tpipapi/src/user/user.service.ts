import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { UpdateUserPassword } from 'src/dto/updateUserPassword.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from 'src/dto/updateUser.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}


    private async hashPassword(password: string): Promise<string> {
        const saltRounds = 10; // Number of salt rounds for bcrypt to generate
      
        // Generate a salt
        const salt = await bcrypt.genSalt(saltRounds);
      
        // Hash the password using the generated salt
        const hashedPassword = await bcrypt.hash(password, salt);
      
        return hashedPassword;
    }
      
    async findAll(): Promise<User[]> {
        return await this.userModel.find()
    }
    
    async findById(id: string): Promise<User> {
        return await this.userModel.findById(id)
    }

    async findByUsername(username: string): Promise<User> {
        return await this.userModel.findOne({username: username})
    }

    
    async updateUserPassword(body: UpdateUserPassword):Promise<User>{
        let user = await this.userModel.findById(body._id)
        user.password = await this.hashPassword(body.password)
        await user.save()
        return user
    }
    
    async findByIdAndDelete(id: string): Promise<any> {
        try {
            let user = await this.userModel.findById(id)
            await user.deleteOne()
            
            return {
                success: true,
                message: "User was deleted"
            }
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
            
        }
    }

    async updateUser(body: UpdateUserDto): Promise<User> {
        let user = await this.userModel.findById(body._id)
        if(body.email) {
            user.email = body.email
        }
        if(body.username) {
            user.username = body.username
        }
        if(body.firstname) {
            user.firstname = body.firstname
        }
        if(body.lastname) {
            user.lastname = body.lastname
        }
        if(body.password) {
            user.password = await this.hashPassword(body.password)
        }
        
        return user.save()
    }
}
