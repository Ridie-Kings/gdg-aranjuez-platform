import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { UserEntity } from "src/users/user.entity";
import { CommentEntity } from "src/comments/comment.entity";

@Entity()
export class PostEntity {
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    title: string;

    @Column()
    content: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => UserEntity, (user) => user.userPosts)
    @JoinColumn({ name: 'createdBy' })
    user: UserEntity;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => CommentEntity, (comment) => comment.post, {
        nullable: true
    })
    comments: CommentEntity[];

}