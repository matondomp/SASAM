import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn
  } from 'typeorm'
import { Municipio } from '../../../../municipality/infra/typeorm/entities/municipes'
import { Province } from '../../../../province/infra/typeorm/entities/Province'

@Entity("distritos")
export class Distrit{
    
    @PrimaryGeneratedColumn('uuid')
    id!:string

    @Column()
    name!:string

    @Column()
    estado_id!:string

    @Column()
    municipio_id!:string

    @Column()
    provincia_id!:string


    @OneToOne(()=>Municipio)
    @JoinColumn({ name:"municipio_id" })
    municipio!:Municipio

    
    @OneToOne(()=>Province)
    @JoinColumn({ name:"provincia_id" })
    provincia!:Province

   
    @CreateDateColumn()
    created_at!:Date

    @UpdateDateColumn()
    updated_at!:Date

}