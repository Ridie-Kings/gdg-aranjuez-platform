import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { UserBadgeEntity } from "../userBadge/userBadge.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity, UserBadgeEntity]),
        ConfigModule.forRoot(),
        JwtModule
    ],
    exports: [TypeOrmModule],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule { }