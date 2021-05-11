import { UserEntity } from "src/auth/entities/user.entity";
import { ReportStatusEnum } from "src/enums/report-status-enum";
import { TimestampEntity } from "src/generics/timestamp.entities";
import { ProgramEntity } from "src/program/entities/program.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany } from "typeorm";
import { ReportFileInterface } from "../interfaces/report-file.interface";


@Entity('report')
export class ReportEntity extends TimestampEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    weakness: string;
;
    @Column()
    asset: string;

    @Column()
    severity: string;

    @Column({
        default:ReportStatusEnum.PENDING
    })
    status: string;

    @Column({
        default: false
    })
    disclosure: boolean;

    @Column({
        default:null
    })
    reportFileName: string;

    @Column({
        default:null
    })
    reportFilePath: string;

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
        (company) => company.reportsforcompany,
        {
            cascade: ['insert','update'],
            nullable: true,
            eager: true
        }
    )
    company: UserEntity;

    @ManyToOne(
        type => UserEntity,
        (triager) => triager.reportsfortriager,
        {
            cascade: ['insert','update'],
            nullable: true,
            eager: true
        },
    )
    triager: UserEntity;

    @ManyToOne(
        type => ProgramEntity,
        (program) => program.reports,
        {
            cascade: ['insert','update'],
            nullable: true,
            eager: true
        }
    )
   program: ProgramEntity;
}