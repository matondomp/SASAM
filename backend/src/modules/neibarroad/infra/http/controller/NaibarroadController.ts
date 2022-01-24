import { container } from 'tsyringe'
import { Request,Response } from 'express'
import { NaibarroadRepository } from '../../typeorm/repository/naibarroadRepository'

import { CreateNaibarroadService } from '../../../service/createNaibarroadService'
import { UpdateNaibarroadService } from '../../../service/updateNaibarroadService'

export class NaibarroadController{

  public async index(request:Request,response:Response):Promise<Response>{
    const repository=new NaibarroadRepository()
    const getNaibarroad= await repository.list()
    return response.json(getNaibarroad)
  }
   
    public async create(request:Request,response:Response):Promise<Response>{
    
      const { 
        name,
        estado_id,
        provincia_id,
        municipio_id,
        distrito_id
       } = request.body
        console.log(request.body)
      const createNaibarroad= container.resolve(CreateNaibarroadService)
     
      const naibarroad=await createNaibarroad.execute({
        name,
        estado_id,
        provincia_id,
        municipio_id,
        distrito_id
      })

      return response.json(naibarroad)
    }

    public async update(request:Request,response:Response):Promise<Response>{
    
      const { 
        name,
        estado_id,
        provincia_id,
        municipio_id,
        distrito_id
       } = request.body
        console.log("body",request.body)
      const UpdateNaibarroad= container.resolve(UpdateNaibarroadService)
       const { id }=request.params
     
      const naibarroad=await UpdateNaibarroad.execute(id,{
        name,
        estado_id,
        provincia_id,
        municipio_id,
        distrito_id
      })

      return response.json(naibarroad)
    }
}