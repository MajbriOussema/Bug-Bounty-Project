import { UserEntity } from "src/auth/entities/user.entity";
import { TimestampEntity } from "src/generics/timestamp.entities";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('activity')
export class ActivityEntity extends TimestampEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(
        type => UserEntity,
        (hacker) => hacker.hackerActivities,
        {
            cascade: ['insert','update'],
            nullable: true,
            eager: true
        },
    )
    hacker: UserEntity;
    @ManyToOne(
        type => UserEntity,
        (company) => company.companyActivities,
        {
            cascade: ['insert','update'],
            nullable: true,
            eager: true
        },
    )
    company: UserEntity;
    @Column({
        default:null
    })
    details: string;
    @Column({
        default:null
    })
    type: string;
}