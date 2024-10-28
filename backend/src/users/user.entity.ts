import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany, JoinTable } from "typeorm"
import { UserLevelEntity } from './userLevel.entity';
import { UserBadgeEntity } from "../badge/userBadge.entity";
import { PostEntity } from "src/post/post.entity";
import { CommentEntity } from "src/comments/comment.entity";
import { ChallengeEntity } from "src/challenges/challenges.entity";
import { UserChallengeEntity } from "src/challenges/userchallenge.entity";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ nullable: true })
    twoFactorId: string;

    @CreateDateColumn()
    createdAt: Date;

    @Column({ nullable: true })
    avatar: string;

    @ManyToOne(() => UserLevelEntity, (level) => level.users)
    @JoinColumn({ name: 'levelId' })
    level: UserLevelEntity;

    @OneToMany(() => UserBadgeEntity, (userBadge) => userBadge.user, {
        nullable: true
    })
    userBadges: UserBadgeEntity[];

    @OneToMany(() => PostEntity, (post) => post.user, {
        nullable: true
    })
    userPosts: PostEntity[];

    @OneToMany(() => CommentEntity, (comment) => comment.user, {
        nullable: true
    })
    comments: CommentEntity[];

    @OneToMany(() => UserChallengeEntity, (userchallenges) => userchallenges.user_entity)
    challenges: UserChallengeEntity[];
}