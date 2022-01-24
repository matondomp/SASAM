import { UserDTO } from '../dto/IuserDTO'
import { User } from '../infra/typeorm/entities/user'

export interface IUsers{
    create(date:UserDTO):Promise<User>
    findById(id:string):Promise<User | undefined>
    update(id:string,date:UserDTO):Promise<void>
    list(filter:string):Promise<Omit<User ,'password'>[]>
    save(data:User):Promise<User>
    findByEmail(email:string):Promise<User | undefined>
}