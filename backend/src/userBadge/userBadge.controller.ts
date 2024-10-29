import { Controller, Post, Body, UseGuards, Get, Param } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { BadgeDto } from 'src/badge/badge.dto';
import { UserDto } from 'src/users/user.dto';
import { UserBadgeService } from './userBadge.service';
import { UserEntity } from 'src/users/user.entity';
import { BadgeEntity } from 'src/badge/badge.entity';


@Controller('user-badges')
export class UserBadgeController {
  constructor(private readonly userBadgeService: UserBadgeService) {}

  @UseGuards(AuthGuard)
  @Post('award')
  async award(@Body() data:{badge: BadgeDto, user: UserDto}) {
    return this.userBadgeService.award(data.badge, data.user);
  }

  @UseGuards(AuthGuard)
  @Get(':name/users')
  async getUsersByBadge(@Param('badge') badge: BadgeDto): Promise<UserEntity[]> {
      return this.userBadgeService.getUsersByBadge(badge);
  }

  @UseGuards(AuthGuard)
  @Get(':username/badges')
  async getBadgesByUser(@Param('user') user: UserDto): Promise<BadgeEntity[]> {
    return this.userBadgeService.getBadgesByUser(user);
  }
}
