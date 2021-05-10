import { Body, Controller, Get, Post, Req, UploadedFile, UseInterceptors,Request } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ReportService } from './report.service';

@Controller('report')
export class ReportController {
    constructor(
        private reportService: ReportService
    ){}
    @Post('submit')
    @UseInterceptors(FileInterceptor("reportPoc",{ dest: "./uploads" }))
    async submitReport(
        @UploadedFile() file,
        @Body() data,
    ) : Promise<any> {
        return this.reportService.submitReport(data);
    }

}
