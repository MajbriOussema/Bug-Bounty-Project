import { UserEntity } from "src/auth/entities/user.entity";
import { ReportStatusEnum } from "src/enums/report-status-enum";
import { TimestampEntity } from "src/generics/timestamp.entities";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne } from "typeorm";


@Entity('report')
export class ReportEntity extends TimestampEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    weakness: string;
;
    @Column()
    asset: string;

    @Column({
        default:ReportStatusEnum.PENDING
    })
    status: string;

    @Column({
        default: false
    })
    disclosure: boolean;


    @ManyToOne(
        type => UserEntity,
        (hacker) => hacker.reportsforhacker,
        {
            cascade: ['insert','update'],
            nullable: true,
            eager: true
        }
    )
    hacker: UserEntity;

    @ManyToOne(
        type => UserEntity,
        (hacker) => hacker.reportsforcompany,
        {
            cascade: ['insert','update'],
            nullable: true,
            eager: true
        }
    )
    company: UserEntity;

    @ManyToOne(
        type => UserEntity,
        (hacker) => hacker.reportsfortriager,
        {
            cascade: ['insert','update'],
            nullable: true,
            eager: true
        }
    )
    triager: UserEntity;

}