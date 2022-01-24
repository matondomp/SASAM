import { container } from 'tsyringe'
import { Request,Response } from 'express'
import { StateRepository } from '../../typeorm/repository/stateRepository'

import { CreateStateService } from '../../../service/createStateService'
import { UpdateStateService } from '../../../service/updateStateService'

interface IFilter{
   filter:string
}

export class StateController{

  public async index(request:Request,response:Response):Promise<Response>{
    const { filter }=request.body
    console.log("state",filter)
    const repository=new StateRepository()
    const getDistrit= await repository.list(filter)
    return response.json(getDistrit)
  }
   
    public async create(request:Request,response:Response):Promise<Response>{
    
      const { 
          name,
          estado_id
       } = request.body
       
      const createState= container.resolve(CreateStateService)
     
      const state=await createState.execute({
        name,
        estado_id
      })

      return response.json(state)
    }

    public async update(request:Request,response:Response){
      const { id }=request.params
      const { name,estado_id } =request.body
      
      const updateService=container.resolve(UpdateStateService)
      const state=await updateService.execute(id,{name,estado_id})

      return response.json(state)
    }
}