import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
  } from 'typeorm'

@Entity("priority")
export class Priority{
    
    @PrimaryGeneratedColumn('uuid')
    id!:string

    @Column()
    description!:string

    @Column()
    slug!:string

    @Column()
    estado_id!:string

    @Column()
    user_id!:string
   
    @CreateDateColumn()
    created_at!:Date

    @UpdateDateColumn()
    updated_at!:Date

}