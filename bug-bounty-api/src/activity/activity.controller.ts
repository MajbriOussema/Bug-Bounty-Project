import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { User } from 'src/decorators/user.decorator';
import { ActivityService } from './activity.service';
import { ActivityEntity } from './entities/activity.entity';

@Controller('activity')
export class ActivityController {
    constructor(
        private activityService: ActivityService
    ){}

    @Get()
    @UseGuards(JwtAuthGuard)
    async getActivities(
        @User() user
    ): Promise<ActivityEntity[]>{
        return await this.activityService.getActivities(user);
    }
    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getActivity(
        @User() user,
        @Param() params,
    ): Promise<Partial<ActivityEntity>>{
        return await this.activityService.getActivity(params.id,user);
    }
}
