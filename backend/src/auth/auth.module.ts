import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';

@Module({
    imports: [
        ConfigModule.forRoot(),
        UsersModule
    ],
    controllers: [AuthController],
    providers: [AuthService, UsersService]
})
export class AuthModule { }
