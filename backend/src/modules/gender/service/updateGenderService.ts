import { inject,injectable } from 'tsyringe'
import { IGender } from '../Igender/gender'
import { IgenderDTO } from '../dto/gender'
import { Gender } from '../infra/typeorm/entities/gender'


@injectable()
export class UpdateStateService{
    
      constructor(
            @inject("GenderRepository")
             private state:IGender
            ){}

     public async execute(id:string,data:IgenderDTO):Promise<Gender>{
           console.log(data)
           const item= await this.state.findById(id)
           if(!item){
               throw new Error("This state does not exist!")
           }
           item.name=data.name
           item.estado_id=data.estado_id
           await this.state.save(item)

         return item
      }
}

