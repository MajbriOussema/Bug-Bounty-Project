import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/auth/entities/user.entity';
import { Repository } from 'typeorm';
import { ActivityEntity } from './entities/activity.entity';

@Injectable()
export class ActivityService {
    constructor(
        @InjectRepository(ActivityEntity)
        private activityRepository: Repository<ActivityEntity>,
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ){}
    async getActivities(user): Promise<ActivityEntity[]>{
        const findUser = await this.userRepository.findOne(user.id);
        const id = findUser.id;
        if(user.role === "hacker"){
            const acts = await this.activityRepository
            .createQueryBuilder('activity')
            .where("activity.hacker.id = :id",{id}).getMany(); 
            return acts;   
        }
        if(user.role === "company"){
            const acts = await this.activityRepository
            .createQueryBuilder('activity')
            .where("activity.company.id = :id",{id}).getMany();
            return acts;
        }
        
    }
}
