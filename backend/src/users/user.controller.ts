import { Body, Controller, Get, Header, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('user')
export class UsersController {

    constructor(private userService: UserService) { }

    @Get(':username')
    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    async checkUserExistence(@Param('username') username: string): Promise<UserDto | null> {
        const response = await this.userService.findOneByUsername(username);
        return response;
    }

    @Post('create')
    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    async createUserIfDoesntExist(@Body() user: UserDto): Promise<UserDto> {
        const response = await this.userService.create(user);
        return response;
    }
}
