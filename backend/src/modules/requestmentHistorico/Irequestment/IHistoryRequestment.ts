import { IrequestmentDTO } from '../dto/historico'
import { historyRequestment } from '../infra/typeorm/entities/historyRequestment'

export interface IHistoryRequestement{
    create(date:IrequestmentDTO):Promise<historyRequestment>
    findById(id:string):Promise<historyRequestment | undefined>
    update(id:string,date:IrequestmentDTO):Promise<void>
    list(filter:string):Promise<historyRequestment[]>
    save(date:historyRequestment):Promise<historyRequestment>
}