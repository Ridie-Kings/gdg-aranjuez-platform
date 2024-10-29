import { ApiProperty } from "@nestjs/swagger";
import { Difficulty } from "./challenge.entity";

export class ChallengeDto {
    @ApiProperty({ example: 'Challenge #n' })
    title: string;

    @ApiProperty({
        example: 'A small distribution warehouse needs a simple software solution to manage its inventory effectively. The warehouse has a fixed set of products, each identified by a unique product ID, name, and category. Each product has specific attributes, including quantity on hand, reorder threshold, and supplier information.'
    })
    description: string;

    @ApiProperty({ default: '1.0' })
    version: number;

    @ApiProperty({ nullable: true })
    pic: string;

    @ApiProperty({
        type: 'enum',
        enum: Difficulty
    })
    difficulty: Difficulty;
}