import { ApiProperty } from "@nestjs/swagger"
import { UserDto } from "./users/user.dto";

export class DataDto {
    @ApiProperty()
    code?: number
    @ApiProperty()
    message: string;
    @ApiProperty()
    token?: string;
    @ApiProperty()
    user?: UserDto;
}