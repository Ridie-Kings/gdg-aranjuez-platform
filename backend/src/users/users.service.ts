import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>
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

    async create(user: UserDto): Promise<UserDto | null> {
        return await this.usersRepository.save(user);
    }

    async remove(uuid: string): Promise<void> {
        await this.usersRepository.delete(uuid);
    }
}
