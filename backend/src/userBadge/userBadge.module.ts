import { Module } from '@nestjs/common';
import { UserBadgeService } from './userBadge.service';
import { UserBadgeController } from './userBadge.controller';
import { BadgeEntity } from 'src/badge/badge.entity';
import { SubjectEntity } from 'src/subjects/subject.entity';
import { UserBadgeEntity } from './userBadge.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserEntity } from 'src/users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserBadgeEntity, SubjectEntity, BadgeEntity, UserEntity]),
    ConfigModule.forRoot(),
    JwtModule
  ],
  exports: [TypeOrmModule, UserBadgeService],
  controllers: [UserBadgeController],
  providers: [UserBadgeService],
})
export class UserBadgeModule {}