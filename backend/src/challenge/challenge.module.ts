import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChallengeEntity } from './challenge.entity';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ChallengeController } from './challenge.controller';
import { ChallengeService } from './challenge.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([ChallengeEntity]),
        ConfigModule.forRoot(),
        JwtModule
    ],
    exports: [TypeOrmModule],
    controllers: [ChallengeController],
    providers: [ChallengeService],
})
export class ChallengeModule { }
