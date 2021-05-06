import { IsEmail, IsNotEmpty } from "class-validator";

export class AddHackerDto {
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    country: string;
    @IsNotEmpty()
    password: string;
}
