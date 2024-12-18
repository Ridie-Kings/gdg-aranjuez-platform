import { Body, Controller, Get, Header, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UserEntity } from './user.entity';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Get(':username')
    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    async checkUserExistence(@Param('username') username: string): Promise<UserDto | null> {
        const response = await this.usersService.findOneByUsername(username);
        return response;
    }

    @Post('create')
    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    async createUserIfDoesntExist(@Body() user: UserDto): Promise<UserDto> {
        const response = await this.usersService.create(user);
        return response;
    }

    @UseGuards(AuthGuard)
    @Get(':uuid/tratos')
    async getUserBadges(@Param('uuid') userId: UserEntity) { //muestra los badges que tiene un usuario va para el lado del usuario
         return this.usersService.getUserBadges(userId);
    }
}
