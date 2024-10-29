import { ApiProperty } from "@nestjs/swagger";

export class BadgeDto {
  @ApiProperty({default: 'example-badge-name'})
  name: string;
  @ApiProperty({default: 'example-badge-description'})
  description: string;
  @ApiProperty({default: 'example-badge-icon'})
  icon: string;


  constructor(name: string, description: string, imageUrl: string) {

    this.name = name;
    this.description = description;
    this.icon = imageUrl;


  }
}