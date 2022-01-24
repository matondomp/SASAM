import { inject,injectable } from 'tsyringe'
import { Iprovince } from '../Iprovince/IProvince'
import { IProvinceDTO } from '../dto/IPrivince'
import { Province } from '../infra/typeorm/entities/Province'


@injectable()
export class CreateProvinceService{
    
      constructor(
            @inject("ProvinceRepository")
             private province:Iprovince
            ){}

     public async execute(data:IProvinceDTO):Promise<Province>{
           
          const item= await this.province.create(data)
          if(!item){
              throw new Error("it should not create municipe")
          }

         return item
      }
}