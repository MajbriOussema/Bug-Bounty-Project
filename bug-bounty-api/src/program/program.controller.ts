import {Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards} from '@nestjs/common';
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
    @Get('directory')
    async getDirectory(): Promise<ProgramEntity[]>{
        return await this.programService.getDirectory();
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
    @UseGuards(JwtAuthGuard)
    async updateProgram(
        @Param() params,
        @Body() updateProgramDto: updateProgramDto,
        @User() company,
    ): Promise<ProgramEntity>{
        return await this.programService.updateProgram(params.id,updateProgramDto,company);
    }


    @Delete(":id")
    @UseGuards(JwtAuthGuard)
    async deleteProgram(
        @Query() q,
        @Param() params,
        @User() user
    ): Promise<Partial<ProgramEntity>>{
        console.log(q);
        return await this.programService.deleteProgram(q.password,params.id,user);
    }

}

