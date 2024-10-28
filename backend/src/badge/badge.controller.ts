import { Controller, Post, Get, Param, Body, UseGuards } from '@nestjs/common';
import { BadgeService } from './badge.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('badges')
export class BadgeController {
    constructor(private readonly badgeService: BadgeService) { }

    @UseGuards(AuthGuard)
    @Post('award')
    async awardBadge(
        @Body() data: { userId: string; badgeId: number }
    ) {
        return this.badgeService.awardBadgeToUser(data.userId, data.badgeId);
    }

    @UseGuards(AuthGuard)
    @Get(':uuid/:userBadges')
    async getUserBadges(@Param('uuid') userId: string) {
        return this.badgeService.getUserBadges(userId);
    }

    @UseGuards(AuthGuard)
    @Get(':uuid/userBadges')
    async getBadgeWithUsers(@Param('uuid') badgeId: string) {
        return this.badgeService.getBadgeWithUsers(badgeId);
    }
}