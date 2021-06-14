import { Controller, Get, UseGuards } from '@nestjs/common';
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
    getActivities(
        @User() user
    ): Promise<ActivityEntity[]>{
        return this.activityService.getActivities(user);
    }
}
