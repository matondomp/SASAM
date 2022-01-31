import { container } from 'tsyringe'
import { Request,Response } from 'express'
import { HistoryRequestmentRepository } from '../../typeorm/repository/historyRequestmentRepository'

import { CreateHistoryRequestmentService } from '../../../service/createHistoryRequestmentService'
import { UpdateHistoryRequestmentService } from '../../../service/updateHistoryRequestmentService'

interface IFilter{
   filter:string
}

export class RequestController{

  public async index(request:Request,response:Response):Promise<Response>{
    const { filter }:IFilter=request.body
    const { id }= request.params
    console.log("1",filter,request.body)
    const repository=new HistoryRequestmentRepository()
    const getRequestment= await repository.list(id)
    return response.json(getRequestment)
  }
   
    public async create(request:Request,response:Response):Promise<Response>{
    
      const { 
        description,
        estado_id,
        user_id,
        solicitacao_id
       } = request.body
       console.log(request.body)
      const requestment= container.resolve(CreateHistoryRequestmentService)
     
      const data=await requestment.execute({
        user_id,
        estado_id,
        description,
        solicitacao_id
      })

      return response.json(data)
    }

    /**
     * name
     */
     public async update(request:Request,response:Response){
      const { id }=request.params
      const { 
        description,
        estado_id,
        user_id,
        solicitacao_id
       } =request.body
  
      const updateService=container.resolve(UpdateHistoryRequestmentService)
      const state=await updateService.execute(id,{ 
        description,
        estado_id,
        user_id,
        solicitacao_id
       })

      return response.json(state)
    }
}