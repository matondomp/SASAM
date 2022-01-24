import { inject,injectable } from 'tsyringe'
import { Imunicipe } from '../Imunicipe/IMunicipes'
import { ImunicipeDTO } from '../dto/ICrmPlace'
import { Municipe } from '../infra/typeorm/entities/municipes'


@injectable()
export class CreateMunicipesService{
    
      constructor(
            @inject("MunicipeRepository")
             private municipe:Imunicipe
            ){}

     public async execute(data:ImunicipeDTO):Promise<Municipe>{
           
          const item= await this.municipe.create(data)
          if(!item){
              throw new Error("it should not create municipe")
          }

         return item
      }
}