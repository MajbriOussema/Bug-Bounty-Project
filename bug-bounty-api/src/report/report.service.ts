import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReportEntity } from './entities/report.entity';

@Injectable()
export class ReportService {
    constructor(
        @InjectRepository(ReportEntity)
        private userRepository: Repository<ReportEntity>,
    ){} 
    async submitReport(data){

    }
}
