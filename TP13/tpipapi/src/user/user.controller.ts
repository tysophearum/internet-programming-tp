import { Body, Controller, Get, Param, Post, Request, } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';
import * as jwt from 'jsonwebtoken';
import { UpdateUserPassword } from 'src/dto/updateUserPassword.dto';
import { DeleteUser } from 'src/dto/deleteUser.dto';
import { UpdateUserDto } from 'src/dto/updateUser.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get("all")
    async getAllUsers(): Promise<User[]> {
        return this.userService.findAll()
    }

    @Get("me")
    async getMe(@Request() req: any):Promise<User> {
        const decryptedToken: any = jwt.verify(req.session.token, 'a-fucking-secret'); req.session.token
        
        return this.userService.findByUsername(decryptedToken.username)
    }

    @Get(":id")
    async getUserById(@Param('id') id: string ): Promise<User> {
        return this.userService.findById(id)
    }

    @Post("update/password")
    async updateUserPassword(@Body() body: UpdateUserPassword): Promise<User> {
        let user: User = await this.userService.updateUserPassword(body)
        return user
    }

    @Post("delete/user")
    async deleteUserById(@Body() body: DeleteUser): Promise<any> {
        return this.userService.findByIdAndDelete(body._id)
    }

    @Post("update/user")
    async updateUser(@Body() body: UpdateUserDto): Promise<User> {
        return this.userService.updateUser(body)
    }
}
