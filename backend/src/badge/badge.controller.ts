import { Controller, Post, Get, Param, Body, UseGuards } from '@nestjs/common';
import { BadgeService } from './badge.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { BadgeEntity } from './badge.entity';
import { BadgeDto } from './badge.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('badges')
export class BadgeController {
    constructor(private readonly badgeService: BadgeService) { }

    @UseGuards(AuthGuard)
    @Post('createBadge')
    @ApiBearerAuth()
    async createBadge(@Body() data: { badge: BadgeDto;}): Promise<BadgeEntity> {
        return this.badgeService.createBadge(data.badge);
    }

    // @UseGuards(AuthGuard)
    // @Get(':uuid/:userBadges')
    // async getUserBadges(@Param('uuid') userId: UserEntity) { //muestra los badges que tiene un usuario va para el lado del usuario
    //     return this.badgeService.getUserBadges(userId);
    // }

    // @UseGuards(AuthGuard)
    // @Get(':uuid/usuarios')
    // async getBadgeWithUsers(@Param('uuid') badgeId: BadgeEntity) {
    //     return this.badgeService.getBadgeWithUsers(badgeId);
    // }
}