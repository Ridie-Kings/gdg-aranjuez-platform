import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany, JoinTable } from "typeorm"
import { UserLevelEntity } from './userLevel.entity';
import { UserBadgeEntity } from "../userBadge/userBadge.entity";
import { PostEntity } from "src/post/post.entity";
import { CommentEntity } from "src/comments/comment.entity";
import { UserChallengeEntity } from "src/userchallenge/userchallenge.entity";
import { SubjectEntity } from "src/subjects/subject.entity";

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
    @JoinColumn()
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

    @ManyToMany(() => SubjectEntity, (subjectEntity) => subjectEntity.users)
    @JoinTable()
    projects: SubjectEntity[];
}