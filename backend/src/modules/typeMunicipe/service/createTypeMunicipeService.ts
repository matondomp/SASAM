import { inject,injectable } from 'tsyringe'
import { ITypeMunicipe } from '../ItypeMunicipe/typeMunicipe'
import { ITypeMunicipeDTO } from '../dto/typeMunicipe'
import { TypeMunicipes } from '../infra/typeorm/entities/typeMunicipe'


@injectable()
export class CreateTypeMinicipeService{
    
      constructor(
            @inject("TypeMunicipeRepository")
             private typeMunicipe:ITypeMunicipe
            ){}

     public async execute(data:ITypeMunicipeDTO):Promise<TypeMunicipes>{
           
          const item= await this.typeMunicipe.create(data)
          if(!item){
              throw new Error("it should not create Distrit")
          }

         return item
      }
}