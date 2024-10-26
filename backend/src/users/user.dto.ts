import { ApiProperty } from "@nestjs/swagger"

export class UserDto {
    @ApiProperty({
        default: 'example-username'
    })
    username: string
    @ApiProperty({
        default: 'example@example.com'
    })
    email: string
    @ApiProperty({
        default: 'password'
    })
    password: string

    constructor(username : string, email: string, password: string){
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
