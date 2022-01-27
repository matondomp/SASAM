import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
  } from 'typeorm'

@Entity("solicitacaos")
export class Requestment{
    
    @PrimaryGeneratedColumn('uuid')
    id!:string

    @Column()
    description!:string

    @Column()
    estado_id!:string

    @Column()
    sla!:string

    @Column()
    user_id!:string
   
    @CreateDateColumn()
    created_at!:Date

    @UpdateDateColumn()
    updated_at!:Date

}