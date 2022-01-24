import { IstateDTO } from '../../dto/state';
import { IState } from '../state'
import { State } from '../../infra/typeorm/entities/state'

export class IFakeStateRepository implements IState{
    listState:any=[]
    public async create(data:IstateDTO):Promise<State>{
        const States=new State()
        Object.assign(States,{...data})
        this.listState.push(States)
        return States
    }
    public async findById(id:string):Promise<State | undefined>{
       const State=this.listState.find((item:any)=>item.id==id)
       return State
    }
    public async update(id:string,data:IstateDTO):Promise<void>{
        const index=this.listState.findIndex((item:any)=>item.id==id)
        this.listState[index]=data
        return this.listState[index]
    }
    public async list():Promise<State[]>{
        return this.listState
    }

    public async save(data:State):Promise<State>{

        this.listState.push(data)
        
        return data
      }
}