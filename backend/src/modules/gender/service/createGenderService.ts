import { inject,injectable } from 'tsyringe'
import { IGender } from '../Igender/gender'
import { IgenderDTO } from '../dto/gender'
import { Gender } from '../infra/typeorm/entities/gender'


@injectable()
export class CreateGenderService{
    
      constructor(
            @inject("GenderRepository")
             private state:IGender
            ){}

     public async execute(data:IgenderDTO):Promise<Gender>{
           
          const item= await this.state.create(data)
          if(!item){
              throw new Error("it should not create Distrit")
          }

         return item
      }
}