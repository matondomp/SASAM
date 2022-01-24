import { IstateDTO } from '../dto/state'
import { State } from '../infra/typeorm/entities/state'

export interface IState{
    create(date:IstateDTO):Promise<State>
    findById(id:string):Promise<State | undefined>
    update(id:string,date:IstateDTO):Promise<void>
    list(filter:string):Promise<State[]>
    save(state:State):Promise<State>
}