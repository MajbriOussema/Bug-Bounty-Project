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

    async updateProgram(id:string,program: AddProgramDto):Promise<ProgramEntity>{

        const updateProgram = await this.programRepository.findOne(+id);
        if (program.name.length > 0) {
            updateProgram.name = program.name
        }
        if (program.policy.length > 0){
            updateProgram.policy = program.policy
        }
        updateProgram.updatedAt = new Date()
        if (program.inScope.length > 0) {
            updateProgram.inScope=program.inScope;
        }
        if (program.outOfScope.length > 0) {
            updateProgram.outOfScope=program.outOfScope;
        }
        return await this.programRepository.save(updateProgram);
    }
}
