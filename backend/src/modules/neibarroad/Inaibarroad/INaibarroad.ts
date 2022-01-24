import { INeibarroadDTO } from '../dto/neibarroad'
import { Naibarroad } from '../infra/typeorm/entities/naibarraod'

export interface INaibarroad{
    create(date:INeibarroadDTO):Promise<Naibarroad>
    findById(id:string):Promise<Naibarroad | undefined>
    update(id:string,date:INeibarroadDTO):Promise<void>
    list():Promise<Naibarroad[]>
    save(date:Naibarroad):Promise<Naibarroad>
}