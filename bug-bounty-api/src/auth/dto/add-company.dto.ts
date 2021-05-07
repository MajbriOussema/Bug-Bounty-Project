import { IsEmail, IsNotEmpty } from "class-validator";

export class AddCompanyDto {
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    company: string;
    @IsNotEmpty()
    password: string;
}
