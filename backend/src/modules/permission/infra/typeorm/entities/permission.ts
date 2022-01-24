import { 
        Column,
        CreateDateColumn, 
        Entity, 
        PrimaryGeneratedColumn, 
        UpdateDateColumn
     } from 'typeorm'

@Entity("permissoes")
export class Permission{

    @PrimaryGeneratedColumn('uuid')
    id!:string
    
    @Column()
    nome!:string

    @Column()
    description !:string

    @Column()
    flag !:string

    @CreateDateColumn()
    created_at!:Date

    @UpdateDateColumn()
    updated_at!:Date
}



   
  