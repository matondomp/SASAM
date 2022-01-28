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
 //users_permission_permissaes
@Entity("users_permission_permissaes")
export class usersPermissoesPermissaes{

@PrimaryGeneratedColumn('uuid')
id!:string

@Column()
userId!:string

@Column()
key!:number

@Column()
permissaeId!:string

@CreateDateColumn()
created_at!:Date

@UpdateDateColumn()
updated_at!:Date
}




