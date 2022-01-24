import { inject,injectable } from 'tsyringe'
import { Ipriority } from '../Ipriority/Ipriority'
import { IPriorityDTO } from '../dto/IPriority'
import { Priority } from '../infra/typeorm/entities/priority'


@injectable()
export class UpdatePriorityService{
    
      constructor(
            @inject("PriorityRepository")
             private priority:Ipriority
            ){}
            
            public async execute(id:string,data:IPriorityDTO):Promise<Priority>{
        
                  const item= await this.priority.findById(id)
                  if(!item){
                      throw new Error("This state does not exist!")
                  }
                  item.description=data.description
                  item.slug=data.slug
                  item.user_id=data.user_id
                  item.estado_id=data.estado_id
                  await this.priority.save(item)
            
                return item
             }
}