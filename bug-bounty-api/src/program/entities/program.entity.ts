import { TimestampEntity } from "src/generics/timestamp.entities";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('program')
export class ProgramEntity extends TimestampEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    company: string;

    @Column()
    policy: string;

    @Column("simple-array",{ nullable: true })
    inScope:string[];

    @Column("simple-array",{ nullable: true })
    severity:string[];

    @Column("simple-array",{ nullable: true })
    outOfScope:string[];


}
