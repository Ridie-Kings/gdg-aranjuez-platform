import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UsersController } from './user.controller';
import { UserService } from './user.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
        ConfigModule.forRoot(),
        JwtModule
    ],
    exports: [TypeOrmModule],
    controllers: [UsersController],
    providers: [UserService],
})
export class UserModule { }