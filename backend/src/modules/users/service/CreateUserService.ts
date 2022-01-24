import { inject,injectable } from 'tsyringe'
import { User } from '../infra/typeorm/entities/user'
import { UserDTO } from '../dto/IuserDTO'
import { IUsers } from '../Iuser/Iuser'
import { IHashProvider } from '../../users/providers/hashProvider/model/IhashProvider'


@injectable()
export class CreateUserRepositoryService{
    
      constructor(
            @inject("UserRepository")
             private userRepository:IUsers,

             @inject("HashProvider")
             private HashProvider:IHashProvider
            ){}

     public async execute(data:UserDTO):Promise<User>{
           
           const hashed= await this.HashProvider.generateHash(data.password)
          
           const item= await this.userRepository.create({ ...data, password:hashed })
           if(!item){
               throw new Error("This typeMunicipe does not exist!")
           }

          return item
      }
}

