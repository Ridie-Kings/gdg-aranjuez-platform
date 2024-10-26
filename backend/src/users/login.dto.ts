import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
    @ApiProperty({ example: 'example-username' })
    username: string;
    @ApiProperty({ example: 'password' })
    password: string;
}