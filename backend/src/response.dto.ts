import { ApiProperty } from "@nestjs/swagger"
import { DataDto } from "./data.dto"

export class ResponseDto {
    @ApiProperty()
    success: boolean
    @ApiProperty()
    data: DataDto
}