import { inject,injectable } from 'tsyringe'
import { IDistrit } from '../Idistrit/IDistrit'
import { IdistritDTO } from '../dto/Idistrit'
import { Distrit } from '../infra/typeorm/entities/distrit'


@injectable()
export class CreateDistritsService{
    
      constructor(
            @inject("DistritRepository")
             private distrit:IDistrit
            ){}

     public async execute(data:IdistritDTO):Promise<Distrit>{
           
          const item= await this.distrit.create(data)
          if(!item){
              throw new Error("it should not create Distrit")
          }

         return item
      }
}