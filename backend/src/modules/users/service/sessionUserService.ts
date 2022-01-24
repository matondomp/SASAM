import "reflect-metadata"

import { sign } from 'jsonwebtoken'
import { jwt } from '../../../config/token'
import { injectable, inject } from "tsyringe"
import AppError  from '../../../shared/errors/appError'
import { User } from '../infra/typeorm/entities/user'
import { UserDTO } from '../dto/IuserDTO'
import { IUsers } from '../Iuser/Iuser'
import { IHashProvider } from '../../users/providers/hashProvider/model/IhashProvider'

interface Request{
    email:string,
    password:string
}

interface Iuser{
    user:User,
    token:string
}

@injectable()
class SessionUserService{

  constructor(
           @inject('UserRepository')
           private createUsers:IUsers,

           @inject("HashProvider")
           private hashProviders: IHashProvider
         ){}

   public async execute({ email,password }:Request):Promise<Iuser>{
 
        const user= await this.createUsers.findByEmail(email)

        if(!user){
            throw new AppError("Incorrect email/password",401)
        }

        const comparedPassword= await this.hashProviders.compare(
             password,
             String(user.password)
             )

        if(!comparedPassword){
            throw new AppError("Incorrect email/password",401)
        }
    
        
         delete user.password

         const { secrat, expiresIn } = jwt

         const token=sign( {} ,secrat,{ 
             subject:user.id,
             expiresIn:expiresIn
         })

        return{ user, token }
   }
}

export { SessionUserService }