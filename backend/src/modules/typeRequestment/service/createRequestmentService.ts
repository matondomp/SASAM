import { inject,injectable } from 'tsyringe'
import { TypeIrequestement } from '../Irequestment/Irequestment'
import { IrequestmentDTO } from '../dto/Irequestment'
import { Requestment } from '../infra/typeorm/entities/requestment'


@injectable()
export class CreateRequestmentService{
    
      constructor(
            @inject("TypeRequestmentRepository")
             private requestment:TypeIrequestement
            ){}

     public async execute(data:IrequestmentDTO):Promise<Requestment>{
           
          const item= await this.requestment.create(data)
          if(!item){
              throw new Error("it should not create Distrit")
          }

         return item
      }
}