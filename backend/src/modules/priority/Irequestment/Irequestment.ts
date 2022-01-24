import { IrequestmentDTO } from '../dto/IPriority'
import { Requestment } from '../infra/typeorm/entities/priority'

export interface Irequestement{
    create(date:IrequestmentDTO):Promise<Requestment>
    findById(id:string):Promise<Requestment | undefined>
    update(id:string,date:IrequestmentDTO):Promise<void>
    list(filter:string):Promise<Requestment[]>
    save(date:Requestment):Promise<Requestment>
}