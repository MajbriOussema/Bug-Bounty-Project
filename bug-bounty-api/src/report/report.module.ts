import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityEntity } from 'src/activity/entities/activity.entity';
import { UserEntity } from 'src/auth/entities/user.entity';
import { ProgramEntity } from 'src/program/entities/program.entity';
import { ReportEntity } from './entities/report.entity';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReportEntity,ProgramEntity,ActivityEntity,UserEntity])
  ],
  controllers: [ReportController],
  providers: [ReportService]
})
export class ReportModule {}
