import { IsNotEmpty, IsString } from "class-validator";

export class AddProgramDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    policy: string;

    @IsNotEmpty()
    @IsString()
    company: string;
} 