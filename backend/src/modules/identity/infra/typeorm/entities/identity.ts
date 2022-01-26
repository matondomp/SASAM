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
import { User } from '../../../../users/infra/typeorm/entities/user'


@Entity("identidades")
export class  Identity{
    
    @PrimaryGeneratedColumn('uuid')
    id!:string

    @Column()
    estado_id!:string

    @Column()
    numero_identificacao!:string
   
    @Column()
    municipe_id!:string

    @Column()
    userId!:string

    @Column()
    tipo_identificacao!:string
    
    @OneToOne(()=>User)
    @JoinColumn({ name:"userId" })
    User!:User


    @OneToOne(()=>Municipe)
    @JoinColumn({ name:"municipe_id" })
    Municipe!:Municipe

    @CreateDateColumn()
    data_emissao!:Date

    @CreateDateColumn()
    data_validade!:Date

    @CreateDateColumn()
    created_at!:Date

    @UpdateDateColumn()
    updated_at!:Date

}