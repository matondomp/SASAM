import { 
        Column,
        CreateDateColumn, 
        Entity, 
        JoinTable, 
        ManyToMany, 
        PrimaryGeneratedColumn, 
        UpdateDateColumn
     } from 'typeorm'

     import { Permission } from '../../../../permission/infra/typeorm/entities/permission'

@Entity("users")
export class User{

    @PrimaryGeneratedColumn('uuid')
    id!:string
    
    @Column()
    name!:string

    @Column()
    email !:string

    @Column()
    telefone !:string

    @Column()
    username !:string
    
    @Column()
    password ?:string

    @Column()
    estado_id !:string

   
    @ManyToMany(() => Permission)
    @JoinTable()
    permission !: Permission[];

    @Column()
    perfil_id!:string

    @CreateDateColumn()
    created_at!:Date

    @UpdateDateColumn()
    updated_at!:Date
}



   
  