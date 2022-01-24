import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn
  } from 'typeorm'
import { Province } from '../../../../province/infra/typeorm/entities/Province'

@Entity("municipios")
export class Municipio{
    
    @PrimaryGeneratedColumn('uuid')
    id!:string

    @Column()
    name!:string

    @Column()
    estado_id!:string

    @Column()
    provincia_id!:string

    @OneToOne(()=>Province)
    @JoinColumn({ name:"provincia_id" })
    provincia!:Province

    
    @CreateDateColumn()
    created_at!:Date

    @UpdateDateColumn()
    updated_at!:Date

}