import { UserRoleEnum } from "src/enums/user-role-enum";
import { TimestampEntity } from "src/generics/timestamp.entities";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('user')
export class UserEntity extends TimestampEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        unique: true,
        length: 50
    })
    email: string;
    @Column({
        unique: true,
        length: 50
    })
    username: string;
    @Column()
    firstname: string;
    @Column()
    lastname: string;
    @Column()
    company: string;
    @Column()
    country: string;
    @Column()
    password: string;
    @Column()
    salt: string;
    @Column({
        type: 'enum',
        enum: UserRoleEnum,
    })
    role: string;
}