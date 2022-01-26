import { inject,injectable } from 'tsyringe'
import { Irequestement } from '../Irequestment/Irequestment'
import { IrequestmentDTO } from '../dto/Irequestment'
import { Requestment } from '../infra/typeorm/entities/requestment'


@injectable()
export class CreateRequestmentService{
    
      constructor(
            @inject("RequestmentRepository")
             private requestment:Irequestement
            ){}

     public async execute(data:IrequestmentDTO):Promise<Requestment>{
           
          const item= await this.requestment.create(data)
          if(!item){
              throw new Error("it should not create Distrit")
          }

         return item
      }
}