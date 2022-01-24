import { getRepository, Like, Not, Repository } from 'typeorm'
import { IstateDTO } from '../../../dto/state'
import { IState  } from '../../../Istate/state'
import { State } from '../entities/state'

export class StateRepository implements IState{
    
    private state:Repository<State>
    constructor(
       
    ){
        this.state=getRepository(State)
    }

    public async create(data:IstateDTO):Promise<State>{
        
       const state= this.state.create({...data })
       await this.state.save(state)

       return state
    }
    public async findById(id:string):Promise<State | undefined>{
        const state=await this.state.findOne({id})

        return state
    }
    public async update(id:string,data:IstateDTO):Promise<void>{
         await this.state.update(id,data)
    }
    public async list(filter:string):Promise<State[]>{
       console.log(filter)
       let state:State[]=[]
       if(filter){
           state= await this.state.find({
                name:Like(`%${filter}%`)
            })

         return state
       }

       state= await this.state.find()

       return state
    }

    public async save(data:State):Promise<State>{
        const state=await this.state.save(data)

        return state
    }
}