import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    OneToOne,
    ManyToOne
  } from 'typeorm'

  import { Gender } from '../../../../gender/infra/typeorm/entities/gender'
  import { TypeMunicipes } from '../../../../typeMunicipe/infra/typeorm/entities/typeMunicipe'
  import { Naibarroad } from '../../../../neibarroad/infra/typeorm/entities/naibarraod'
  import { Identity } from '../../../../identity/infra/typeorm/entities/identity'

@Entity("municipes")
export class Municipe{
    
    @PrimaryGeneratedColumn('uuid')
    id!:string

    @Column()
    name!:string

    @Column()
    estado_id!:string

    @Column()
    pai!:string

    @Column()
    mae!:string

    @Column()
    residencia!:string 

    
    @Column()
    email!:string
    
    @Column()
    telefone!:string 
    
    @Column()
    bairro_id!:string 

    @OneToOne(()=>Naibarroad)
    @JoinColumn({ name:"bairro_id" })
    bairro!:Naibarroad
    
    @Column()
    user_id!:string 
    
    @Column()
    tipo_municipe_id!:string 

    @OneToOne(()=>TypeMunicipes)
    @JoinColumn({ name:"tipo_municipe_id" })
    tipeMunicipio!:TypeMunicipes
    
    @Column()
    genero_id!:string 
    
    @Column()
    data_nascimento!:Date

    @Column()
    estado_cil_id!:string 
    
    @OneToOne(()=>Gender)
    @JoinColumn({ name:"estado_cil_id" })
    estadoCivil!:Gender

    @CreateDateColumn()
    created_at!:Date

    @UpdateDateColumn()
    updated_at!:Date

}