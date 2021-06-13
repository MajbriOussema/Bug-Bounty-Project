import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/auth/entities/user.entity';
import { UserRoleEnum } from 'src/enums/user-role-enum';
import { Repository } from 'typeorm';
import { AddProgramDto } from './dto/addProgram.dto';
import { ProgramEntity } from './entities/program.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ProgramService {
    constructor(
        @InjectRepository(ProgramEntity)
        private programRepository: Repository<ProgramEntity>,
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ){}
    async getPrograms(company): Promise<ProgramEntity[]>{
        if(company.role === UserRoleEnum.ADMIN){
            return await this.programRepository.find();
        }
        return await this.programRepository.find({company});
    }
    async addProgram(program: AddProgramDto, company): Promise<Partial<ProgramEntity>> {
        const newProgram = this.programRepository.create(program);
        newProgram.company = company;
        console.log(newProgram);
        return await this.programRepository.save(newProgram);
    }
    async getOneProgram(searchedId : number): Promise<ProgramEntity>{
        return await this.programRepository.findOne({id:searchedId});
    }
    async getDirectory(): Promise<Partial<ProgramEntity[]>>{
        return await this.programRepository.find();
    }
    async updateProgram(id:string,program: AddProgramDto,company):Promise<ProgramEntity>{
        
        const updateProgram = await this.programRepository.findOne(+id);
        if(!updateProgram){
            throw new NotFoundException("Program not found");
        }
        console.log(updateProgram.company.id);
        console.log(company.id);
        if(updateProgram.company.id == company.id){
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
        else  {
            throw new UnauthorizedException("Unauthorized")
        }
    }


    async deleteProgram(password,id,user):Promise<Partial<ProgramEntity>>{
        const u = await this.userRepository.findOne(user.id);
        
        const hashedPassword = await bcrypt.hash(password,u.salt);
        if(hashedPassword === u.password){
            const deletedProgram = await this.programRepository.findOne(+id);
            return await this.programRepository.remove(deletedProgram);
        }
        else {
            throw new UnauthorizedException('Incorrect password');
        }
        
        
    }
}
