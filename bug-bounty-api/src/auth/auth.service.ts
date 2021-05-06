import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddHackerDto } from './dto/add-hacker.dto';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UserRoleEnum } from 'src/enums/user-role-enum';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
        private jwtService: JwtService
    ){}
    async registerHacker(data: AddHackerDto): Promise<Partial<UserEntity>>{
        const user = this.userRepository.create({
            ...data
        });
        user.salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password,user.salt);
        user.role = UserRoleEnum.HACKER;
        try {
            await this.userRepository.save(user);
        } catch (e) {
            throw new ConflictException('Le username et le email doivent être unique');
        }
        return {
            'id': user.id,
            'role': user.role,
            'username': user.username
        }
    }
    async login(data: LoginDto){
        const {email,password} = data;
        const user = await this.userRepository
        .createQueryBuilder('user')
        .where('user.email = :email',{email}).getOne();
        if(!user){
            throw new NotFoundException('Incorrect username or password');
        }
        const hashedPassword = await bcrypt.hash(password,user.salt);
        if(hashedPassword === user.password){
            const payload = {
                'username': user.username,
                'role': user.role
            };
            const jwt = await this.jwtService.sign(payload);
            return {
                'token': jwt
            }
        }
        else {
            throw new NotFoundException('Incorrect username or password');
        }
    }
}
