import { IProvinceDTO } from '../dto/IPrivince'
import { Province } from '../infra/typeorm/entities/Province'

export interface Iprovince{
    create(date:IProvinceDTO):Promise<Province>
    findById(id:string):Promise<Province | undefined>
    update(id:string,date:IProvinceDTO):Promise<void>
    list():Promise<Province[]>
    save(data:Province):Promise<Province>
}