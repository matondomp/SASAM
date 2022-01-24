import { IPriorityDTO } from '../dto/IPriority'
import { Priority } from '../infra/typeorm/entities/priority'

export interface Ipriority{
    create(date:IPriorityDTO):Promise<Priority>
    findById(id:string):Promise<Priority | undefined>
    update(id:string,date:IPriorityDTO):Promise<void>
    list(filter:string):Promise<Priority[]>
    save(date:Priority):Promise<Priority>
}