import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, JoinColumn } from "typeorm"
import { UserBadgeEntity } from "src/badge/userBadge.entity";
import { SubjectEntity } from "src/subjects/subject.entity";

@Entity()
export class BadgeEntity {
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    icon: string;

    @OneToMany(() => UserBadgeEntity, (userBadge) => userBadge.badge)
    userBadges: UserBadgeEntity[];

    @OneToOne(() => SubjectEntity, (subjectEntity) => subjectEntity.badge, { nullable: true })
    @JoinColumn()
    subject: SubjectEntity;
}