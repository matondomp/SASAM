import { inject,injectable } from 'tsyringe'
import { Ipriority } from '../Ipriority/Ipriority'
import { IPriorityDTO } from '../dto/IPriority'
import { Priority } from '../infra/typeorm/entities/priority'


@injectable()
export class CreatePriprityService{
    
      constructor(
            @inject("PriorityRepository")
             private priority:Ipriority
            ){}

     public async execute(data:IPriorityDTO):Promise<Priority>{
           
          const item= await this.priority.create(data)
          if(!item){
              throw new Error("it should not create Distrit")
          }

         return item
      }
}