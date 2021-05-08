import {IsArray, IsNotEmpty, IsOptional, IsString} from "class-validator";

export class AddProgramDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    policy: string;

    @IsOptional()
    @IsArray()
    inScope: string[];
    
    @IsOptional()
    @IsArray()
    outOfScope: string[];
} 