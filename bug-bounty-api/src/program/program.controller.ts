import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AddProgramDto } from './dto/addProgram.dto';
import { ProgramEntity } from './entities/program.entity';
import { ProgramService } from './program.service';
import {updateProgramDto} from "./dto/updateProgram.dto";
import { User } from 'src/decorators/user.decorator';

@Controller('program')
export class ProgramController {
    constructor(
        private programService: ProgramService
    ){}
    @Get()
    @UseGuards(JwtAuthGuard)
    async getAllPrograms(
        @User() user
    ) : Promise<ProgramEntity[]>{
        return await this.programService.getPrograms(user);
    }

    @Get(':id')
    async getOneProgram(@Param() params) : Promise<ProgramEntity>{
        return await this.programService.getOneProgram(+params.id);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    async addProgram(
        @Body() AddProgramDto: AddProgramDto,
        @User() user
    ): Promise<Partial<ProgramEntity>>{
        return await this.programService.addProgram(AddProgramDto,user);
    }

    @Put(':id')
    async updateProgram(
        @Param() params,
        @Body() updateProgramDto: updateProgramDto
    ): Promise<ProgramEntity>{
        return await this.programService.updateProgram(params.id,updateProgramDto);
    }


    @Delete(":id")
    async deleteProgram(@Param() params): Promise<ProgramEntity>{
        return await this.programService.deleteProgram(params.id);
    }

}

