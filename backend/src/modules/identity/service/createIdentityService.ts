import { inject,injectable } from 'tsyringe'
import { IIdentity } from '../Iidentity/identity'
import { IdentityDTO } from '../dto/identity'
import { Identity } from '../infra/typeorm/entities/identity'


@injectable()
export class CreateIdentityService{
    
      constructor(
            @inject("IdentityRepository")
             private dentity:IIdentity
            ){}

     public async execute(data:IdentityDTO):Promise<Identity>{
           
          const item= await this.dentity.create(data)
          if(!item){
              throw new Error("não criou Identidade")
          }

         return item
      }
}