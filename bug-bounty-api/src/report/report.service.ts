import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { exception } from 'console';
import { UserRoleEnum } from 'src/enums/user-role-enum';
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
    async submitReport(programId,data: SubmitReportDto,user) : Promise<Partial<ReportEntity>>{
        if(user.role === UserRoleEnum.COMPANY){
            throw new UnauthorizedException("Only Hackers can sumbit reports");
        }
        if((user.role === UserRoleEnum.ADMIN)||(user.role === UserRoleEnum.HACKER)){
            const prog = await this.programRepository.findOne(programId);
            if(prog){
                const newProg = this.programRepository.create(prog);
                newProg.numberOfReports += 1;
                await this.programRepository.save(newProg);
                const newReport = this.reportRepository.create(data);
                newReport.hacker=user;
                newReport.company=user;
                newReport.program = programId;
                await this.reportRepository.save(newReport);
                return {
                    'asset' : newReport.asset
                };
            }
            else {
                throw new NotFoundException();
            }
        }
    }
}
