import { IdistritDTO } from '../dto/Idistrit'
import { Distrit } from '../infra/typeorm/entities/distrit'

export interface IDistrit{
    create(date:IdistritDTO):Promise<Distrit>
    findById(id:string):Promise<Distrit | undefined>
    update(id:string,date:IdistritDTO):Promise<void>
    list(filter:string):Promise<Distrit[]>
    save(distrito:Distrit):Promise<Distrit>

}