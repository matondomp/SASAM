import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn
  } from 'typeorm'

  import { TypeRequestment } from '../../../../typeRequestment/infra/typeorm/entities/requestment'
  import { State } from '../../../../state/infra/typeorm/entities/state'
@Entity("solicitacaos")
export class Requestment{
    
    @PrimaryGeneratedColumn('uuid')
    id!:string

    @Column()
    name!:string

    @Column()
    estado_id!:number

    @Column()
    tipo_solicitacao_id!:string


    @OneToOne(()=>State)
    @JoinColumn({ name:"estado_id" })
    Estado!:State

    @OneToOne(()=>TypeRequestment)
    @JoinColumn({ name:"tipo_solicitacao_id" })
    TipoSolicitacoes!:TypeRequestment


    @Column()
    telefone!:string
    
    @Column()
    numero_identificacao!:string

    @CreateDateColumn()
    created_at!:Date

    @UpdateDateColumn()
    updated_at!:Date

}