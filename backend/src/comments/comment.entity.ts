import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { UserEntity } from '../users/user.entity';
import { PostEntity } from '../post/post.entity';

@Entity()
export class CommentEntity {
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    content: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => UserEntity, user => user.comments)
    user: UserEntity;

    @ManyToOne(() => PostEntity, post => post.comments)
    post: PostEntity;
}