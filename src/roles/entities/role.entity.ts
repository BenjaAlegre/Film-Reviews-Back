import { User } from "src/users/entities/user.entity";
import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class Role {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    description: string;

    @OneToMany(() => User, (user) => user.role)
    user: User;
}
