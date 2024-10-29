import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BadgeEntity } from './badge.entity';
import { BadgeDto } from './badge.dto';
import { SubjectEntity } from 'src/subjects/subject.entity';

@Injectable()
export class BadgeService {
    constructor(
        @InjectRepository(BadgeEntity)
        private badgeRepository: Repository<BadgeEntity>,
        @InjectRepository(SubjectEntity)
        private subjectRepository: Repository<SubjectEntity>,
    ) { }

    findAll(): Promise<BadgeEntity[]> {
        return this.badgeRepository.find();
    }

    findOne(option: any): Promise<BadgeDto | null> {
        return this.badgeRepository.findOne(option);
    }

    findOneByUuid(uuid: string): Promise<BadgeEntity | null> {
        return this.badgeRepository.findOneBy({ uuid });
    }

    findOneByName(name: string): Promise<BadgeDto | null> {
        return this.badgeRepository.findOneBy({ name: name });
    }

    async createBadge(badge: BadgeDto): Promise<BadgeEntity> {
        return await this.badgeRepository.save(badge);
    }

    async findOneSubject(option: any): Promise<SubjectEntity | null> {
        const badge = await this.findOne(option);
        if (badge) {
            return this.subjectRepository.findOne(option);
        }
        return null;
    }



    // async awardBadgeToUser(userId: UserDto, badgeId: BadgeDto): Promise<UserBadgeEntity> {
    //     const user = await this.usersRepository.findOneBy({ username: userId.username });
    //     const badge = await this.badgeRepository.findOneBy({ name: badgeId.name });
    //     console.log(user, badge);
    //     const userBadgeEntity = this.userBadgeRepository.create({
    //         user,
    //         badge,
    //     });

    //     return this.userBadgeRepository.save(userBadgeEntity);
    // }

    // async getUserBadges(userId: UserEntity): Promise<UserBadgeEntity[]> {  //muestra los badges que tiene un usuario va para el lado del usuario
    //     return this.userBadgeRepository.find({
    //         where: { user: userId },
    //         relations: ['badge_id'],
    //     });
    // }

    // async getBadgeWithUsers(badgeId: BadgeEntity): Promise<UserBadgeEntity[]> { //muestra los usuarios que tienen un cierto badge
    //     return this.userBadgeRepository.find({
    //         where: { badge: badgeId },
    //         relations: ['user_badges'], //TODO checkeo
    //     });
    // }
}