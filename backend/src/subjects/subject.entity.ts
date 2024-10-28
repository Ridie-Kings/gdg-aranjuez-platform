import { BadgeEntity } from "src/badge/badge.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, JoinColumn } from "typeorm"

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

    //TODO relation with codingchallenge
}