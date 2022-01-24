import { inject,injectable } from 'tsyringe'
import { ITypeMunicipe } from '../ItypeMunicipe/typeMunicipe'
import { ITypeMunicipeDTO } from '../dto/typeMunicipe'
import { TypeMunicipes } from '../infra/typeorm/entities/typeMunicipe'


@injectable()
export class UpdateTypeMunicipeService{
    
      constructor(
            @inject("TypeMunicipeRepository")
             private typeMunicipe:ITypeMunicipe
            ){}

     public async execute(id:string,data:ITypeMunicipeDTO):Promise<TypeMunicipes>{
           console.log(data)
           const item= await this.typeMunicipe.findById(id)
           if(!item){
               throw new Error("This typeMunicipe does not exist!")
           }
           item.name=data.name
           item.estado_id=data.estado_id
           await this.typeMunicipe.save(item)

         return item
      }
}

