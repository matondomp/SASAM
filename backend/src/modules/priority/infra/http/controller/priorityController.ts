import { container } from 'tsyringe'
import { Request,Response } from 'express'
import { PriorityRepository } from '../../typeorm/repository/priorityRepository'

import { CreatePriprityService } from '../../../service/createPriorityService'
import { UpdatePriorityService } from '../../../service/updatePriorityService'

interface IFilter{
   filter:string
}

export class PriorityController{

  public async index(request:Request,response:Response):Promise<Response>{
    const { filter }:IFilter=request.body
    console.log("1",filter,request.body)
    const repository=new PriorityRepository()
    const getRequestment= await repository.list(filter)
    return response.json(getRequestment)
  }
   
    public async create(request:Request,response:Response):Promise<Response>{
    
      const { 
          description,
          estado_id,
          user_id,
          slug
       } = request.body

      const priority= container.resolve(CreatePriprityService)
     
      const data=await priority.execute({
        slug,
        user_id,
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
      const { description, estado_id, slug, user_id } =request.body
  
      const updateService=container.resolve(UpdatePriorityService)
      const state=await updateService.execute(id,{ description, estado_id, slug,user_id })

      return response.json(state)
    }
}