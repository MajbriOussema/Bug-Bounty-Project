/* eslint-disable */
import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('programs')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('checkPassword')
  checkPassword(@Query() params: any): boolean {
    return this.appService.checkPassword(params.password).valid;
  }
}
