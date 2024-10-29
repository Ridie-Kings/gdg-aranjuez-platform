import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { ChallengeEntity } from './challenge.entity';
import { ChallengeDto } from './challenge.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('challenge')
export class ChallengeController {
    constructor(private readonly challengeService: ChallengeService) { }

    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    @Post('create')
    async createChallenge(@Body() challenge: ChallengeDto) {
        return this.challengeService.create(challenge);
    }

    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    @Get('all')
    async getAllChallenges() {
        return this.challengeService.findAll();
    }

    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    @Get(':substr')
    async getByTitleSubstr(@Param('substr') substr: string) {
        return this.challengeService.findByTitleSubstr(substr);
    }

    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    @Delete(':uuid')
    async getBadgeWithUsers(@Param('uuid') challengeId: string) {
        return this.challengeService.remove(challengeId);
    }
}
