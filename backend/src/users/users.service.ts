import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDto } from './user.dto';
import { UserLevelEntity } from './userLevel.entity';
import { UserBadgeEntity } from "../userBadge/userBadge.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
        @InjectRepository(UserBadgeEntity)
        private userBadgeRepository: Repository<UserBadgeEntity>,
        // @InjectRepository(UserLevelEntity)
        // private userLevelRepository: Repository<UserLevelEntity>,
    ) { }

    findAll(): Promise<UserEntity[]> {
        return this.usersRepository.find();
    }

    findOne(option: any): Promise<UserDto | null> {
        return this.usersRepository.findOne(option);
    }

    findOneByUuid(uuid: string): Promise<UserEntity | null> {
        return this.usersRepository.findOneBy({ uuid });
    }

    findOneByUsername(username: string): Promise<UserDto | null> {
        return this.usersRepository.findOneBy({ username: username });
    }

    findOneEntityByUsername(username: string): Promise<UserEntity | null> {
        return this.usersRepository.findOneBy({ username: username });
    }

    async create(user: UserDto): Promise<UserDto | null> {
        return await this.usersRepository.save(user);
    }

    async remove(uuid: string): Promise<void> {
        await this.usersRepository.delete(uuid);
    }
    // TODO
    async updateUserLevel(uuid: string, level: UserLevelEntity): Promise<void> { //TODO revisar y checkear esto del UserLevelEntity para updatear
        const user = await this.usersRepository.findOneBy({ uuid });
        user.level = level;
        await this.usersRepository.save(user);
    }

    async getUserBadges(userId: UserEntity): Promise<UserBadgeEntity[]> {  //muestra los badges que tiene un usuario va para el lado del usuario
        return this.userBadgeRepository.find({
            where: { user: userId },
            relations: ['users_badges'],
        });
    }

}
