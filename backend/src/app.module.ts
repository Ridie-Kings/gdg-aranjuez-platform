import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/user.entity';
import { UserLevelEntity } from './users/userLevel.entity';
import { BadgeEntity } from './badge/badge.entity';
import { UserBadgeEntity } from './badge/userBadge.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { SubjectEntity } from './subjects/subject.entity';
import { PostEntity } from './post/post.entity';
import { CommentEntity } from './comments/comment.entity';
import { ChallengeEntity } from './challenges/challenges.entity';
import { UserChallengeEntity } from './challenges/userchallenge.entity';

@Module({
    imports: [
        ThrottlerModule.forRoot([{
            name: "default",
            ttl: 60000,
            limit: 10,
        }]),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'user',
            password: 'user',
            database: 'hw42',
            entities: [
                UserEntity,
                UserLevelEntity,
                BadgeEntity,
                UserBadgeEntity,
                SubjectEntity,
                PostEntity,
                CommentEntity,
                ChallengeEntity,
                UserChallengeEntity
            ],
            synchronize: true,
            autoLoadEntities: true,
            dropSchema: true
        }),
        AuthModule,
        UsersModule
    ],
    controllers: [AppController],
    providers: [AppService, {
        provide: APP_GUARD,
        useClass: ThrottlerGuard
    },]
})
export class AppModule { }
