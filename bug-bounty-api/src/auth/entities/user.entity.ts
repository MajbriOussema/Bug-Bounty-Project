import { UserRoleEnum } from "src/enums/user-role-enum";
import { TimestampEntity } from "src/generics/timestamp.entities";
import { ProgramEntity } from "src/program/entities/program.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


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
    @Column({
        default:null
    })
    firstname: string;
    @Column({
        default:null
    })
    lastname: string;
    @Column({
        default:null
    })
    company: string;
    @Column({
        default:null
    })
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

    @OneToMany(
        type => ProgramEntity,
        (program) => program.company,
        {
            cascade: true,
            nullable: true,
        }
    )
    programs: ProgramEntity[];
}