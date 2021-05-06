import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddProgramDto } from './dto/addProgram.dto';
import { ProgramEntity } from './entities/program.entity';

@Injectable()
export class ProgramService {
    constructor(
        @InjectRepository(ProgramEntity)
        private programRepository: Repository<ProgramEntity>
    ){}
    async getPrograms(): Promise<ProgramEntity[]>{
        return await this.programRepository.find();
    }
    async addProgram(program: AddProgramDto): Promise<ProgramEntity> {
        return await this.programRepository.save(program);
    }
    async getOneProgram(searchedId : number): Promise<ProgramEntity>{
        return await this.programRepository.findOne({id:searchedId});
    }
}
