import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
    @ApiProperty({ example: 'example@example.com' })
    email: string;
    @ApiProperty({ example: 'password' })
    password: string;
}