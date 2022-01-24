import { inject,injectable } from 'tsyringe'
import { IIdentity } from '../Iidentity/identity'
import { IdentityDTO } from '../dto/identity'
import { Identity } from '../infra/typeorm/entities/identity'


@injectable()
export class UpdateIdentityService{
    
      constructor(
            @inject("IdentityRepository")
             private identity:IIdentity
            ){}

     public async execute(id:string,data:IdentityDTO):Promise<Identity>{
           console.log(data,id)
           const item= await this.identity.findById(id)
           if(!item){
               throw new Error("This Identidade does not exist!")
           }
           item.name=data.name
           item.estado_id=data.estado_id
           await this.identity.save(item)

         return item
      }
}

