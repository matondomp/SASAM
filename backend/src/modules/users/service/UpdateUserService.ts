import { inject,injectable } from 'tsyringe'
import { User } from '../infra/typeorm/entities/user'
import { UserDTO } from '../dto/IuserDTO'
import { IUsers } from '../Iuser/Iuser'


@injectable()
export class UpdateUserRepositoryService{
    
      constructor(
            @inject("UserRepository")
             private userRepository:IUsers
            ){}

     public async execute(id:string,data:UserDTO):Promise<User>{
           console.log(data)
           const item= await this.userRepository.findById(id)
           if(!item){
               throw new Error("This typeMunicipe does not exist!")
           }
           item.email=data.email
           item.name=data.name
           item.telefone=data.telefone
           item.estado_id=data.estado_id
           await this.userRepository.save(item)

         return item
      }
}

