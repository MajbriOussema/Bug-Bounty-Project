import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProgramEntity } from 'src/program/entities/program.entity';
import { Repository } from 'typeorm';
import { SubmitReportDto } from './dto/submit-report.dto';
import { ReportEntity } from './entities/report.entity';

@Injectable()
export class ReportService {
    constructor(
        @InjectRepository(ReportEntity)
        private reportRepository: Repository<ReportEntity>,
        @InjectRepository(ProgramEntity)
        private programRepository: Repository<ProgramEntity>
    ){} 
    async submitReport(id,data: SubmitReportDto,user) : Promise<Partial<ReportEntity>>{
        const newReport =  this.reportRepository.create(data);
        newReport.hacker=user;
        newReport.company=user;
        const prog = this.programRepository.findOne(id);
        console.log(prog);
        return this.reportRepository.save(newReport);
    }
}
