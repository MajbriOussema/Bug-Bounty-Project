import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/auth/entities/user.entity';
import { ProgramEntity } from 'src/program/entities/program.entity';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { ActivityEntity } from './entities/activity.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
        ActivityEntity,
        UserEntity,
        ProgramEntity
    ])
  ],
  controllers: [ActivityController],
  providers: [ActivityService]
})
export class ActivityModule {}
