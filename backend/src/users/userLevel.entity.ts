import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { UserEntity } from './user.entity';

@Entity()
export class UserLevelEntity {
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    exp: number;
    //TODO sistema de experiencia para ascender en los niveles del usuario.

    @Column()
    name: string;

    @OneToMany(() => UserEntity, (user) => user.level)
    users: UserEntity[];
}