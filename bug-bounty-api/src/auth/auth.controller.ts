import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AddCompanyDto } from './dto/add-company.dto';
import { AddHackerDto } from './dto/add-hacker.dto';
import { LoginDto } from './dto/login.dto';
import { UserEntity } from './entities/user.entity';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}
    @Post('register/hacker')
    registerHacker(@Body() data: AddHackerDto): Promise<Partial<UserEntity>>{
        return this.authService.registerHacker(data);
    }
    @Post('login')
    login(@Body() data: LoginDto) {
        return this.authService.login(data);
    }

    @Post('register/company')
    registerCompany(
        @Body() data: AddCompanyDto
    ):Promise<Partial<UserEntity>>{
        console.log("Company registration");
        return this.authService.registerCompany(data);
    }

}
