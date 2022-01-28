import { inject,injectable } from 'tsyringe'
import { IState } from '../Istate/state'
import { IstateDTO } from '../dto/state'
import { State } from '../infra/typeorm/entities/state'


@injectable()
export class UpdateStateService{
    
      constructor(
            @inject("StateRepository")
             private state:IState
            ){}

     public async execute(id:string,data:IstateDTO):Promise<State>{
           console.log(data)
           const item= await this.state.findById(id)
           if(!item){
               throw new Error("This state does not exist!")
           }
           item.name=data.name
           //item.estado_id=data.estado_id
           await this.state.save(item)

         return item
      }
}

