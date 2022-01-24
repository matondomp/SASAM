import { ImunicipeDTO } from '../dto/ICrmPlace'
import { Municipe } from '../infra/typeorm/entities/municipes'

export interface Imunicipe{
    create(date:ImunicipeDTO):Promise<Municipe>
    findById(id:string):Promise<Municipe | undefined>
    update(id:string,date:ImunicipeDTO):Promise<void>
    list():Promise<Municipe[]>
    save(date:Municipe):Promise<Municipe>
}