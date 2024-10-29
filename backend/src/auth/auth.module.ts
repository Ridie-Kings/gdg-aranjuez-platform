import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/users/user.module';
import { UserService } from 'src/users/user.service';

@Module({
    imports: [
        ConfigModule.forRoot(),
        UserModule
    ],
    controllers: [AuthController],
    providers: [AuthService, UserService]
})
export class AuthModule { }