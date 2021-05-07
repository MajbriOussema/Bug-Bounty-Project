import {Body, Controller, Get, Param, Post, Query, UseGuards} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AddProgramDto } from './dto/addProgram.dto';
import { ProgramEntity } from './entities/program.entity';
import { ProgramService } from './program.service';
import {updateProgramDto} from "./dto/updateProgram.dto";

@Controller('program')
export class ProgramController {
    constructor(
        private programService: ProgramService
    ){}
    @Get()
    @UseGuards(JwtAuthGuard)
    async getAllPrograms() : Promise<ProgramEntity[]>{
        return await this.programService.getPrograms();
    }
    @Post()
    async addProgram(
        @Body() updateProgramDto: updateProgramDto
    ): Promise<ProgramEntity>{
        return await this.programService.addProgram(updateProgramDto);
    }

    @Post(':id')
    async updateProgram(
        @Param() params,
        @Body() addProgramDto: AddProgramDto
    ): Promise<ProgramEntity>{
        return await this.programService.updateProgram(params.id,addProgramDto);
    }

    @Get(':id')
    async getOneProgram(@Param() params) : Promise<ProgramEntity>{
        return await this.programService.getOneProgram(+params.id);
    }

}

