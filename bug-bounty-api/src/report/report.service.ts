import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { exception } from 'console';
import { ActivityEntity } from 'src/activity/entities/activity.entity';
import { UserEntity } from 'src/auth/entities/user.entity';
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
        private programRepository: Repository<ProgramEntity>,
        @InjectRepository(ActivityEntity)
        private activityRepository: Repository<ActivityEntity>,
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ){} 
    async submitReport(programId,data: SubmitReportDto,user) : Promise<Partial<ReportEntity>>{
        if(user.role === UserRoleEnum.COMPANY){
            throw new UnauthorizedException("Only Hackers can sumbit reports");
        }
        if((user.role === UserRoleEnum.ADMIN)||(user.role === UserRoleEnum.HACKER)){
            const prog = await this.programRepository.findOne(programId);
            if(prog){
                const id = prog.company.id;
                prog.numberOfReports += 1;
                const company = await this.userRepository.createQueryBuilder('user')
                .where('user.id = :id',{id}).getOne();
                await this.programRepository.save(prog);
                const newReport = this.reportRepository.create(data);
                newReport.hacker=user;
                newReport.company=company;
                newReport.program = programId;
                await this.reportRepository.save(newReport);
                const act = {
                    'program' : prog,
                    'details' : 'N/A',
                    'hacker' : user,
                    'company' : company,
                    'type' : 'report submit'
                };
                const newActivity = this.activityRepository.create(act);
                await this.activityRepository.save(newActivity);
                console.log(newActivity);
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
