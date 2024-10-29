import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/user.entity';
import { Like, Repository } from 'typeorm';
import { ChallengeEntity } from './challenge.entity';
import { ChallengeDto } from './challenge.dto';

@Injectable()
export class ChallengeService {
    constructor(
        @InjectRepository(ChallengeEntity)
        private challengeRepository: Repository<ChallengeEntity>,
    ) { }

    /**
     * Bulk get
     */
    findAll(): Promise<ChallengeEntity[]> {
        return this.challengeRepository.find();
    }

    /**
     * Get by substring inside title
     */
    findByTitleSubstr(substr: string): Promise<ChallengeEntity[]> {
        return this.challengeRepository.find(
            {
                where: {
                    title: Like(`%${substr} % `)
                }
            }
        );
    }

    /**
     * Create a challenge
     */
    async create(challenge: ChallengeDto): Promise<ChallengeEntity | null> {
        return await this.challengeRepository.save(challenge);
    }

    /**
     * Delete a challenge
     */
    async remove(uuid: string): Promise<void> {
        await this.challengeRepository.delete(uuid);
    }

}
