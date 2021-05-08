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
    async getPrograms(company): Promise<ProgramEntity[]>{
        
        return await this.programRepository.find();
    }
    async addProgram(program: AddProgramDto, company): Promise<Partial<ProgramEntity>> {
        console.log(company);
        const newProgram = this.programRepository.create(program);
        newProgram.company = company;
        return await this.programRepository.save(newProgram);
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


    async deleteProgram(id):Promise<ProgramEntity>{
        const deletedProgram = await this.programRepository.findOne(+id);
        return await this.programRepository.remove(deletedProgram);
    }
}
