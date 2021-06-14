import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { User } from 'src/decorators/user.decorator';
import { ActivityService } from './activity.service';

@Controller('activity')
export class ActivityController {
    constructor(
        private activityService: ActivityService
    ){}

    @Get()
    @UseGuards(JwtAuthGuard)
    getActivities(
        @User() user
    ){
        return await this.activityService.getActivities(user);
    }
}
