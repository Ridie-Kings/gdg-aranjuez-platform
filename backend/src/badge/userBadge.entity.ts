import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, CreateDateColumn } from "typeorm"
import { UserEntity } from '../users/user.entity';
import { BadgeEntity } from './badge.entity';

@Entity()
export class UserBadgeEntity {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    earnetAt: Date;

    @Column()
    badge_id: number;

    @Column()
    user_id: string;

    @ManyToOne(() => BadgeEntity, (badge) => badge.userBadges)
    @JoinColumn({name: 'badge_id'})
    badge: BadgeEntity;

    @ManyToOne(() => UserEntity, (user) => user.userBadges)
    @JoinColumn({name: 'user_id'})
    user: UserEntity;

}