import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BadgeEntity } from './badge.entity';
import { UserBadgeEntity } from './userBadge.entity';
import { BadgeService } from './badge.service';
import { BadgeController } from './badge.controller';
import { SubjectEntity } from 'src/subjects/subject.entity';

@Module({
    imports: [TypeOrmModule.forFeature([BadgeEntity, UserBadgeEntity])],
    providers: [BadgeService],
    controllers: [BadgeController],
    exports: [BadgeService],
})
export class BadgeModule { }