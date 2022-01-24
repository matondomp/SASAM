import { inject,injectable } from 'tsyringe'
import { Imunicipio } from '../Imunicipe/IMunicipes'
import { ImunicipeDTO } from '../dto/municipality'
import { Municipio } from '../infra/typeorm/entities/municipes'



@injectable()
export class UpdateMunicipioService{
    
      constructor(
                @inject("MunicipioRepository")
                private municipe:Imunicipio
            ){}

     public async execute(id:string,data:ImunicipeDTO):Promise<Municipio>{
           
         const item= await this.municipe.findById(id)
          if(!item){
              throw new Error("it should not update distrito")
          }
         
          item.name=data.name
          item.provincia_id=data.provincia_id
          item.estado_id=item.estado_id
          
          await this.municipe.save(item)
         return item
      }
}