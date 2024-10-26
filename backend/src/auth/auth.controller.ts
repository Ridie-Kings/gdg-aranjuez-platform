import { Body, Controller, Get, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { UserDto } from 'src/users/user.dto';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { ResponseDto } from 'src/response.dto';
import { LoginDto } from 'src/users/login.dto';
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Get('check')
    async checkUserAvailability(@Query() username: string, @Query() email: string): Promise<ResponseDto> {
        const userAvailable = await this.authService.checkUserExists(username, email);
        return {
            success: userAvailable,
            data: {
                code: userAvailable ? 200 : 409,
                message: userAvailable ? 'User available' : 'User already exists'
            }
        }
    }
    @Post('register')
    async register(@Body() user: UserDto, @Res() res: Response): Promise<ResponseDto> {
        const response = await this.authService.createUser(user);
        res.status(response.success ? HttpStatus.CREATED : HttpStatus.CONFLICT).send(response);
        return response;
    }
    @Post('login')
    async login(@Body() loginData: LoginDto, @Res() res: Response): Promise<ResponseDto> {
        const { username, password } = loginData;
        const response = await this.authService.login(username, password);
        res.status(response.success ? HttpStatus.OK : HttpStatus.UNAUTHORIZED).send(response);
        return response;
    }

}
