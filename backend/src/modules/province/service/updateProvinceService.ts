import { inject,injectable } from 'tsyringe'
import { Iprovince } from '../Iprovince/IProvince'
import { IProvinceDTO } from '../dto/IPrivince'
import { Province } from '../infra/typeorm/entities/Province'



@injectable()
export class UpdateProvinceService{
    
      constructor(
                @inject("ProvinceRepository")
                private province:Iprovince
            ){}

     public async execute(id:string,data:IProvinceDTO):Promise<Province>{
           console.log('id',id)
         const item= await this.province.findById(id)
  
          if(!item){
              throw new Error("it should not update distrito")
          }
         
          item.name=data.name
          item.estado_id=item.estado_id
          
          await this.province.save(item)
         return item
      }
}