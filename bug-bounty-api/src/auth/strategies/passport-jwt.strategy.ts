import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { PayloadInterface } from "../interfaces/payload.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('SECRET'),
    });
  }
  async validate(payload: PayloadInterface){
    console.log(payload);
    const user = await this.userRepository.findOne({username: payload.username});
    if(user){
        delete user.salt;
        delete user.password;
        return user;
    }
    else {
        throw new UnauthorizedException();
    }
  }
}