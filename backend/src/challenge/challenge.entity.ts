import { UserEntity } from 'src/users/user.entity';
import { text } from 'stream/consumers';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { UserChallengeEntity } from '../userchallenge/userchallenge.entity';
import { SubjectEntity } from 'src/subjects/subject.entity';

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

    @Column({ nullable: true })
    version: number;

    @Column({ nullable: true })
    pic: string;

    @Column({
        type: 'enum',
        enum: Difficulty,
    })
    difficulty: Difficulty;

    @OneToMany(() => UserChallengeEntity, (userchallenges) => userchallenges.challenge_entity)
    users: UserChallengeEntity[];

    @ManyToOne(() => SubjectEntity, (subject) => subject.challenges)
    subject: SubjectEntity;

}