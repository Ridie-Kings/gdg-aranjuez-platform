import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserBadgeEntity } from './userBadge.entity'; // Adjust the import path as necessary
import { UserEntity } from '../users/user.entity'; // Adjust the import path as necessary
import { BadgeEntity } from '../badge/badge.entity'; // Adjust the import path as necessary
import { BadgeDto } from '../badge/badge.dto'; // Adjust the import path as necessary
import { UserDto } from 'src/users/user.dto';

@Injectable()
export class UserBadgeService {
  constructor(
    @InjectRepository(UserBadgeEntity)
    private readonly userBadgeRepository: Repository<UserBadgeEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(BadgeEntity)
    private readonly badgeRepository: Repository<BadgeEntity>,
  ) {}

  async award( badge:  BadgeDto, user: UserDto): Promise<UserBadgeEntity> {
    const userEntity = await this.userRepository.findOne({ where: { username: user.username } });
    const badgeEntity = await this.badgeRepository.findOne({ where: {name: badge.name}})

    // Create a new UserBadgeEntity
    const userBadge = this.userBadgeRepository.create({
      user: userEntity,
      badge: badgeEntity,
    });
    // Save the new UserBadgeEntity to the database
    return await this.userBadgeRepository.save(userBadge);
  }

  async getUsersByBadge(badgeD: BadgeDto): Promise<UserEntity[]> {
    const badge = await this.badgeRepository.findOne({
      where: { name: badgeD.name },
      relations: ['userBadges', 'userBadges.user']
    });
  
    // Extract just the users from the userBadges relationship
    return badge.userBadges.map(userBadge => userBadge.user);
  }

  async getBadgesByUser(user: UserDto): Promise<BadgeEntity[]> {
    const userEntity = await this.userRepository.findOne({
      where: { username: user.username },
      relations: ['userBadges', 'userBadges.badge']
    });

    // Extract just the badges from the userBadges relationship
    return userEntity.userBadges.map(userBadge => userBadge.badge);
  }

}
