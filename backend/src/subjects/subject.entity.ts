import { BadgeEntity } from "src/badge/badge.entity";
import { UserBadgeEntity } from "../userBadge/userBadge.entity";
import { UserEntity } from "../users/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, JoinColumn, ManyToMany } from "typeorm"
import { ChallengeEntity } from "src/challenge/challenge.entity";

@Entity()
export class SubjectEntity {
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    icon: string;

    @ManyToOne(() => SubjectEntity, (subjectEntity) => subjectEntity.children, {
        nullable: true
    })
    parent: SubjectEntity | null;

    @OneToMany(() => SubjectEntity, (subjectEntity) => subjectEntity.parent)
    children: SubjectEntity[];

    @OneToOne(() => BadgeEntity, (badgeEntity) => badgeEntity.subject)
    @JoinColumn()
    badge: BadgeEntity;

    @ManyToMany(() => UserEntity, user => user.projects)
    users: UserEntity[];

    @OneToMany(() => ChallengeEntity, (challengeEntity) => challengeEntity.subject)
    @JoinColumn()
    challenges: ChallengeEntity[];

}