import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BadgeEntity } from './badge.entity';
import { UserBadgeEntity } from './userBadge.entity';

@Injectable()
export class BadgeService {
    constructor(
        @InjectRepository(BadgeEntity)
        private badgeRepository: Repository<BadgeEntity>,
        @InjectRepository(UserBadgeEntity)
        private userBadgeRepository: Repository<UserBadgeEntity>,
    ) { }

    async awardBadgeToUser(userId: string, badgeId: number): Promise<UserBadgeEntity> {
        const userBadgeEntity = this.userBadgeRepository.create({
            user_id: userId,
            badge_id: badgeId,
        });

        return this.userBadgeRepository.save(userBadgeEntity);
    }

    async getUserBadges(userId: string): Promise<UserBadgeEntity[]> {
        return this.userBadgeRepository.find({
            where: { user_id: userId },
            relations: ['badge_id'],
        });
    }

    async getBadgeWithUsers(badgeId: string): Promise<BadgeEntity> {
        return this.badgeRepository.findOne({
            where: { uuid: badgeId },
            relations: ['userBadges', 'userBadges.user'], //TODO checkeo
        });
    }
}