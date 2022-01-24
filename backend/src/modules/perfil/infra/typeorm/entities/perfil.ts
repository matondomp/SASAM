import { 
        Column,
        CreateDateColumn, 
        Entity, 
        PrimaryGeneratedColumn, 
        UpdateDateColumn
     } from 'typeorm'

@Entity("perfils")
export class Perfil{

    @PrimaryGeneratedColumn('uuid')
    id!:string
    
    @Column()
    nome!:string

    @Column()
    estado_id !:string

    @CreateDateColumn()
    created_at!:Date

    @UpdateDateColumn()
    updated_at!:Date
}



   
  