import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgramEntity } from 'src/program/entities/program.entity';
import { ReportEntity } from './entities/report.entity';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReportEntity,ProgramEntity])
  ],
  controllers: [ReportController],
  providers: [ReportService]
})
export class ReportModule {}
