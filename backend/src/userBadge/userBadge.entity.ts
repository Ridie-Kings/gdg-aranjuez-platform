import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, CreateDateColumn } from "typeorm"
import { UserEntity } from '../users/user.entity';
import { BadgeEntity } from '../badge/badge.entity';

@Entity()
export class UserBadgeEntity {
    @PrimaryGeneratedColumn('uuid')
    uuid: string; //a1

    @CreateDateColumn()
    earnetAt: Date;

    @ManyToOne(() => BadgeEntity, (badge) => badge.userBadges)
    badge: BadgeEntity; //b1

    @ManyToOne(() => UserEntity, (user) => user.userBadges)
    user: UserEntity; //u1

}