import { inject,injectable } from 'tsyringe'
import { IDistrit } from '../Idistrit/IDistrit'
import { IdistritDTO } from '../dto/Idistrit'
import { Distrit } from '../infra/typeorm/entities/distrit'



@injectable()
export class UpdateDistritService{
    
      constructor(
            @inject("DistritRepository")
             private distrit:IDistrit
            ){}

     public async execute(id:string,data:IdistritDTO):Promise<Distrit>{
           
         const item= await this.distrit.findById(id)
          if(!item){
              throw new Error("it should not update distrito")
          }
         
          item.name=data.name
          item.municipio_id=data.municipio_id
          item.provincia_id=data.provincia_id
          item.estado_id=item.estado_id
          
          await this.distrit.save(item)
         return item
      }
}