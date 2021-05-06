import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
//import {Transform} from "stream";
import { Transform } from 'class-transformer';
import moment from "moment";

@Entity('program')
export class ProgramEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    company: string;

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


}
