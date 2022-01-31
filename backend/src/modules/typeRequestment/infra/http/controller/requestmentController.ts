import { container } from 'tsyringe'
import { Request,Response } from 'express'
import { TypeRequestmentRepository } from '../../typeorm/repository/requestmentRepository'

import { CreateRequestmentService } from '../../../service/createRequestmentService'
import { UpdateRequestmentService } from '../../../service/updateRequestmentService'

interface IFilter{
   filter:string
}

export class RequestController{

  public async index(request:Request,response:Response):Promise<Response>{
    const { filter }:IFilter=request.body
    console.log("1",filter,request.body)
    const repository=new TypeRequestmentRepository()
    const getRequestment= await repository.list(filter)
    return response.json(getRequestment)
  }
   
    public async create(request:Request,response:Response):Promise<Response>{
    
      const { 
          name,
          estado_id,
       } = request.body
       console.log(name,estado_id)
      const requestment= container.resolve(CreateRequestmentService)
     
      const data=await requestment.execute({
        estado_id,
        name,
        
      })

      return response.json(data)
    }

    /**
     * name
     */
     public async update(request:Request,response:Response){
      const { id }=request.params
      const { name, estado_id } =request.body
  
      const updateService=container.resolve(UpdateRequestmentService)
      const state=await updateService.execute(id,{ name, estado_id })

      return response.json(state)
    }
}