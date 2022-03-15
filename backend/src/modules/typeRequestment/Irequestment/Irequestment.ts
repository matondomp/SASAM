import { IrequestmentDTO } from '../dto/Irequestment'
import { TypeRequestment } from '../infra/typeorm/entities/requestment'

export interface TypeIrequestement{
    create(date:IrequestmentDTO):Promise<TypeRequestment>
    findById(id:string):Promise<TypeRequestment | undefined>
    update(id:string,date:IrequestmentDTO):Promise<void>
    list(filter:string):Promise<TypeRequestment[]>
    save(date:TypeRequestment):Promise<TypeRequestment>
}