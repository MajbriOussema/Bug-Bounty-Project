import { Body, Controller, Get, Post, Req, UploadedFile, UseInterceptors,Request, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { User } from 'src/decorators/user.decorator';
import { SubmitReportDto } from './dto/submit-report.dto';
import { ReportService } from './report.service';

@Controller('report')
export class ReportController {
    constructor(
        private reportService: ReportService
    ){}
    @Post('submit')
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(FileInterceptor("reportPoc",{ dest: "./uploads" }))
    async submitReport(
        @UploadedFile() file,
        @Body() body,
        @User() user,
    ) : Promise<any> {
        const data: SubmitReportDto = body;
        data.reportFileName = file.originalname;
        data.reportFilePath = file.path;
        return this.reportService.submitReport(body.programId,data,user);
    }
    
}
