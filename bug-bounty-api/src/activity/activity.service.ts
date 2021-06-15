import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/auth/entities/user.entity';
import { ProgramEntity } from 'src/program/entities/program.entity';
import { Repository } from 'typeorm';
import { ActivityEntity } from './entities/activity.entity';

@Injectable()
export class ActivityService {
    constructor(
        @InjectRepository(ActivityEntity)
        private activityRepository: Repository<ActivityEntity>,
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
        @InjectRepository(ProgramEntity)
        private programRepository: Repository<ProgramEntity>,
    ){}
    async getActivities(user): Promise<ActivityEntity[]>{
        const findUser = await this.userRepository.findOne(user.id);
        const id = findUser.id;
        let acts = [];
        if(user.role === "hacker"){
            acts = await this.activityRepository
            .createQueryBuilder('activity')
            .where("activity.hacker.id = :id",{id}).getMany(); 
        }
        if(user.role === "company"){
            acts = await this.activityRepository
            .createQueryBuilder('activity')
            .where("activity.company.id = :id",{id}).getMany();
        }
        return acts;   
    }
    async getActivity(id,user): Promise<Partial<ActivityEntity>>{
        const act = await this.activityRepository.findOne(id);
        const res = {
            'type' : act.type,
            'programName' : act.program.name,
            'hackerName' : act.hacker.username,
            'companyName' : act.company.company,
            'date' : act.createdAt,
            'details' : act.details
        };
        return res;
    }
}
