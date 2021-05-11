import { UserEntity } from "src/auth/entities/user.entity";
import { ReportEntity } from "src/report/entities/report.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('program')
export class ProgramEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    policy: string;

    @CreateDateColumn({
        update: false,
    })
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

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
