import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AddHackerDto } from './dto/add-hacker.dto';
import { LoginDto } from './dto/login.dto';
import { UserEntity } from './entities/user.entity';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}
    @Post('register/hacker')
    registerHacker(
        @Body() data: AddHackerDto
    ): Promise<Partial<UserEntity>>{
        console.log("Hacker registration");
        console.log(data);
        return this.authService.registerHacker(data);
    }
    @Post('login')
    login(
        @Body() data: LoginDto
    ){
        console.log(data);
        return this.authService.login(data);
    }

    @Post('register/company')
    registerCompany(
        @Body() data
    ){
        console.log("Company registration");
        console.log(data);
    }
}
