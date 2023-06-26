import { Body, Controller, Get, Post, Session, Request } from '@nestjs/common';
import { RegisterDto } from 'src/dto/register.dto';
import { LoginDto } from 'src/dto/login.dto';
import { User } from '../user/schema/user.schema';
import * as jwt from 'jsonwebtoken';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
    constructor(private authService: AuthService){}

    @Post("register")
    async register (@Body() user: RegisterDto): Promise<User> {
        return this.authService.register(user)
    }

    @Post("login")
    async login (@Body() login: LoginDto, @Session() session: Record<string, any>): Promise<any> {
        let status

        if(session.token) {
            status = {
                success: false,
                message: "You are ALREADY logged in!!!"
            }
        }
        else {
            status = await this.authService.login(login)
        }

        if(status.success){
            const token = jwt.sign({username: login.username}, 'a-fucking-secret')
            session.token = token
        }
        
        return status
    }

    @Get("logout")
    async logout (@Request() req: any): Promise<any> {
        req.session.destroy();
        return {
            success: true,
            message: "You are logged out"
        }
    }
}
