import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BadgeEntity } from './badge.entity';
import { BadgeService } from './badge.service';
import { BadgeController } from './badge.controller';
import { SubjectEntity } from 'src/subjects/subject.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        TypeOrmModule.forFeature([BadgeEntity, SubjectEntity]),
        ConfigModule.forRoot(),
        JwtModule
    ],
    exports: [TypeOrmModule, BadgeService],
    providers: [BadgeService],
    controllers: [BadgeController],
})
export class BadgeModule { }