import { UserEntity } from 'src/users/user.entity';
import { text } from 'stream/consumers';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { UserChallengeEntity } from './userchallenge.entity';

export enum Difficulty {
    EASY = 'EASY',
    MEDIUM = 'MEDIUM',
    HARD = 'HARD',
}

@Entity()
export class ChallengeEntity {
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    difficulty: string;

    @Column({ nullable: true })
    version: number;

    @Column({ nullable: true })
    pic: string;

    @Column({
        type: 'enum',
        enum: Difficulty,
    })
    diff: Difficulty;

    @OneToMany(() => UserChallengeEntity, (userchallenges) => userchallenges.challenge_entity)
    users: UserChallengeEntity[];
}