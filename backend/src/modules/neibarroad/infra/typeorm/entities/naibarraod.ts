import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    OneToOne
  } from 'typeorm'

  import { Municipio } from '../../../../municipality/infra/typeorm/entities/municipes'
  import { Province } from '../../../../province/infra/typeorm/entities/Province'
  import { Distrit } from '../../../../distrit/infra/typeorm/entities/distrit'
  import { State } from '../../../../state/infra/typeorm/entities/state'

@Entity("bairros")
export class Naibarroad{
    
    @PrimaryGeneratedColumn('uuid')
    id!:string

    @Column()
    name!:string

    @Column()
    estado_id!:string

    @Column()
    provincia_id!:string

    @Column()
    municipio_id!:string

    @Column()
    distrito_id!:string 


    @OneToOne(()=>Distrit)
    @JoinColumn({ name:"distrito_id" })
    distrito!:Distrit

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