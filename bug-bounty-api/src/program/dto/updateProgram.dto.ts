import {IsArray, IsOptional, IsString} from "class-validator";

export class updateProgramDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    policy: string;

    @IsOptional()
    @IsString()
    company: string;

    @IsOptional()
    @IsArray()
    inScope: string[];

    @IsOptional()
    @IsArray()
    outOfScope: string[];
}