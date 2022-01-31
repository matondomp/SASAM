import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn
  } from 'typeorm'

  import { User } from '../../../../users/infra/typeorm/entities/user'
  import { Requestment } from '../../../../requestment/infra/typeorm/entities/requestment'
  import { State } from '../../../../state/infra/typeorm/entities/state'
  
@Entity("historico_solicitacoes")
export class historyRequestment{
    
    @PrimaryGeneratedColumn('uuid')
    id!:string

    @Column()
    description!:string

    @Column()
    estado_id!:string

    @Column()
    user_id!:string

    @Column()
    solicitacao_id!:string

    @OneToOne(()=>State)
    @JoinColumn({ name:"estado_id" })
    Estado!:State


    @OneToOne(()=>Requestment)
    @JoinColumn({ name:"solicitacao_id" })
    Solicitacoes!:Requestment

    @OneToOne(()=>User)
    @JoinColumn({ name:"user_id" })
    Users!:User

    @Column()
    motivo!:string
    
    @CreateDateColumn()
    created_at!:Date

    @UpdateDateColumn()
    updated_at!:Date

}