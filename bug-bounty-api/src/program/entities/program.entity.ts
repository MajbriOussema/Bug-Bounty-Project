import { UserEntity } from "src/auth/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
}
