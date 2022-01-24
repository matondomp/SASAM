import { inject,injectable } from 'tsyringe'
import { IState } from '../Istate/state'
import { IstateDTO } from '../dto/state'
import { State } from '../infra/typeorm/entities/state'


@injectable()
export class CreateStateService{
    
      constructor(
            @inject("StateRepository")
             private state:IState
            ){}

     public async execute(data:IstateDTO):Promise<State>{
           
          const item= await this.state.create(data)
          if(!item){
              throw new Error("it should not create Distrit")
          }

         return item
      }
}