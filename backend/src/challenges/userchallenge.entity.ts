import { UserEntity } from "src/users/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ChallengeEntity } from "./challenges.entity";

@Entity()
export class UserChallengeEntity {
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column({ type: 'boolean', default: '0' })
    completed: number;

    @Column({ type: 'boolean', default: '0' })
    available: number;

    @ManyToOne(() => UserEntity, (userEntity) => userEntity.challenges)
    @JoinColumn({ name: 'user_key' })
    user_entity: UserEntity;

    @ManyToOne(() => ChallengeEntity, (challengeEntity) => challengeEntity.users)
    @JoinColumn({ name: 'challenge_key' })
    challenge_entity: ChallengeEntity;

}