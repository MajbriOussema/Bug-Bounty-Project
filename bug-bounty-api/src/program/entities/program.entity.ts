import { ActivityEntity } from "src/activity/entities/activity.entity";
import { UserEntity } from "src/auth/entities/user.entity";
import { TimestampEntity } from "src/generics/timestamp.entities";
import { ReportEntity } from "src/report/entities/report.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('program')
export class ProgramEntity extends TimestampEntity{
    @PrimaryGeneratedColumn()
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    policy: string;

    @Column("simple-array",{ nullable: true })
    inScope:string[];

    @Column("simple-array",{ nullable: true })
    severity:string[];

    @Column("simple-array",{ nullable: true })
    outOfScope:string[];

    @ManyToOne(
        type => UserEntity,
        (user) => user.programs,
        {
            cascade: ['insert','update'],
            nullable: true,
            eager: true
        }
    )
    company: UserEntity;
    @Column({
        default: 0
    })
    numberOfReports: number;
    @OneToMany(
        type => ReportEntity,
        (report) => report.program,
        {
            cascade: true,
            nullable: true,
        }
    )
    reports: ReportEntity[];
    
}
