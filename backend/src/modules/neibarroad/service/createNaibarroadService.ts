import { inject,injectable } from 'tsyringe'
import { INaibarroad } from '../Inaibarroad/INaibarroad'
import { INeibarroadDTO } from '../dto/neibarroad'
import { Naibarroad } from '../infra/typeorm/entities/naibarraod'


@injectable()
export class CreateNaibarroadService{
    
      constructor(
            @inject("NaibarroadRepository")
             private naibarroad:INaibarroad
            ){}

     public async execute(data:INeibarroadDTO):Promise<Naibarroad>{
           
          const item= await this.naibarroad.create(data)
          if(!item){
              throw new Error("it should not create municipe")
          }

         return item
      }
}