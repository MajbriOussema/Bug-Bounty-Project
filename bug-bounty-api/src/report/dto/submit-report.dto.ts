import {IsArray, IsJSON, IsNotEmpty, IsOptional, IsString} from "class-validator";
import { ReportFileInterface } from "../interfaces/report-file.interface";

export class SubmitReportDto {
    @IsNotEmpty()
    @IsString()
    asset: string;

    @IsNotEmpty()
    @IsString()
    weakness: string;

    @IsNotEmpty()
    @IsString()
    severity: string;

    @IsNotEmpty()
    @IsString()
    reportFilePath: string;

    @IsNotEmpty()
    @IsString()
    reportFileName: string;
} 