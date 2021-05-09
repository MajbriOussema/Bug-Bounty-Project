import { Controller, Get } from '@nestjs/common';

@Controller('report')
export class ReportController {
    @Get('submit')
    async submitReport(){
        
    }

}
