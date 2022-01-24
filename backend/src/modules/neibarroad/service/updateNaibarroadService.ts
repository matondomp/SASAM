import { inject,injectable } from 'tsyringe'
import { INaibarroad } from '../Inaibarroad/INaibarroad'
import { INeibarroadDTO } from '../dto/neibarroad'
import { Naibarroad } from '../infra/typeorm/entities/naibarraod'


@injectable()
export class UpdateNaibarroadService{
    
      constructor(
            @inject("NaibarroadRepository")
             private naibarroad:INaibarroad
            ){}

     public async execute(id:string,data:INeibarroadDTO):Promise<Naibarroad>{
           
         const item= await this.naibarroad.findById(id)
          if(!item){
              throw new Error("it should not create municipe")
          }
          item.name=data.name
          item.municipio_id=data.municipio_id
          item.provincia_id=data.provincia_id
          item.distrito_id=data.distrito_id
          item.estado_id=item.estado_id
          
          item.estado_id=data.estado_id
        
          await this.naibarroad.save(item)
         return item
      }
}