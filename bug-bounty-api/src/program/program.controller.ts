import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import { AddProgramDto } from './dto/addProgram.dto';
import { ProgramEntity } from './entities/program.entity';
import { ProgramService } from './program.service';

@Controller('program')
export class ProgramController {
    constructor(
        private programService: ProgramService
    ){}
    @Get()
    async getAllPrograms() : Promise<ProgramEntity[]>{
        return await this.programService.getPrograms();
    }
    @Post()
    async addProgram(
        @Body() addProgramDto: AddProgramDto
    ): Promise<ProgramEntity>{
        return await this.programService.addProgram(addProgramDto);
    }

    @Get(':id')
    async getOneProgram(@Param() params) : Promise<ProgramEntity>{
        return await this.programService.getOneProgram(+params.id);
    }

}

