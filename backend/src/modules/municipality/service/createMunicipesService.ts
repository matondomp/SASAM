import { inject,injectable } from 'tsyringe'
import { Imunicipio } from '../Imunicipe/IMunicipes'
import { ImunicipeDTO } from '../dto/municipality'
import { Municipio } from '../infra/typeorm/entities/municipes'


@injectable()
export class CreateMunicipesService{
    
      constructor(
            @inject("MunicipioRepository")
             private municipe:Imunicipio
            ){}

     public async execute(data:ImunicipeDTO):Promise<Municipio>{
           
          const item= await this.municipe.create(data)
          if(!item){
              throw new Error("it should not create municipe")
          }

         return item
      }
}