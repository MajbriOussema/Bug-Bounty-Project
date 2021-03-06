import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProgramModule } from './program/program.module';
import { AuthModule } from './auth/auth.module';
import { ReportModule } from './report/report.module';
import { HistoryModule } from './history/history.module';
import { MulterModule } from '@nestjs/platform-express';
import { ActivityModule } from './activity/activity.module';

dotenv.config()
@Module({
  imports: [
    MulterModule.register({
      dest: './uploads'
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }
    ),
    ProgramModule,
    AuthModule,
    ReportModule,
    HistoryModule,
    ActivityModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
