import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
  } from 'typeorm'

@Entity("estados")
export class State{
    
    @PrimaryGeneratedColumn('uuid')
    id!:string

    @Column()
    name!:string

   /*  @Column()
    estado_id!:string */
   
    @CreateDateColumn()
    created_at!:Date

    @UpdateDateColumn()
    updated_at!:Date

}