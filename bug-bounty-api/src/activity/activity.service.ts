import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityEntity } from './entities/activity.entity';

@Injectable()
export class ActivityService {
    constructor(
        @InjectRepository(ActivityEntity)
        private activityRepository: Repository<ActivityEntity>,
    ){}
    async getActivities(user){
        const acts = await this.activityRepository
        .
    }
}
