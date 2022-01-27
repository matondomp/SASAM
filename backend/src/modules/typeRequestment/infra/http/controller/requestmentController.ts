import { container } from 'tsyringe'
import { Request,Response } from 'express'
import { RequestmentRepository } from '../../typeorm/repository/requestmentRepository'

import { CreateRequestmentService } from '../../../service/createRequestmentService'
import { UpdateRequestmentService } from '../../../service/updateRequestmentService'

interface IFilter{
   filter:string
}

export class RequestController{

  public async index(request:Request,response:Response):Promise<Response>{
    const { filter }:IFilter=request.body
    console.log("1",filter,request.body)
    const repository=new RequestmentRepository()
    const getRequestment= await repository.list(filter)
    return response.json(getRequestment)
  }
   
    public async create(request:Request,response:Response):Promise<Response>{
    
      const { 
          description,
          estado_id,
          sla
       } = request.body
       console.log(description,sla)
      const requestment= container.resolve(CreateRequestmentService)
     
      const data=await requestment.execute({
        sla,
        estado_id,
        description,
        
      })

      return response.json(data)
    }

    /**
     * name
     */
     public async update(request:Request,response:Response){
      const { id }=request.params
      const { description, estado_id, sla } =request.body
  
      const updateService=container.resolve(UpdateRequestmentService)
      const state=await updateService.execute(id,{ description, estado_id, sla })

      return response.json(state)
    }
}