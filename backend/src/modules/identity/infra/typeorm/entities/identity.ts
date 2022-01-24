import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    OneToMany,
    OneToOne
  } from 'typeorm'

  import { Municipe  } from '../../../../crn_place/infra/typeorm/entities/municipes'

@Entity("identidades")
export class  Identity{
    
    @PrimaryGeneratedColumn('uuid')
    id!:string

    @Column()
    name!:string

    @Column()
    estado_id!:string
   
    @Column()
    municipe_id!:string

 
    @OneToOne(()=>Municipe)
    @JoinColumn({ name:"municipe_id" })
    Municipe!:Municipe


    @CreateDateColumn()
    created_at!:Date

    @UpdateDateColumn()
    updated_at!:Date

}