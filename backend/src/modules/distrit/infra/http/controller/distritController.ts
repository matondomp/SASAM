import { container } from 'tsyringe'
import { Request,Response } from 'express'
import { DistritRepository } from '../../typeorm/repository/distritRepository'

import { CreateDistritsService } from '../../../service/createDistritsService'
import { UpdateDistritService } from '../../../service/updateDistritService'

interface IFilter{
   filter:string
}

export class DistritController{

  public async index(request:Request,response:Response):Promise<Response>{
    const { filter }:IFilter=request.body
    console.log("1",filter)
    const repository=new DistritRepository()
    const getDistrit= await repository.list(filter)
    return response.json(getDistrit)
  }
   
    public async create(request:Request,response:Response):Promise<Response>{
    
      const { 
          name,
          estado_id,
          municipio_id,
          provincia_id
       } = request.body
       
      const createDistrit= container.resolve(CreateDistritsService)
     
      const distrit=await createDistrit.execute({
        name,
        estado_id,
        municipio_id,
        provincia_id
      })

      return response.json(distrit)
    }

    public async update(request:Request,response:Response):Promise<Response>{
    
      const { 
        name,
        estado_id,
        provincia_id,
        municipio_id,
        distrito_id
       } = request.body
  
      const distrist= container.resolve(UpdateDistritService)
       const { id }=request.params
     
      const responseDistrit=await distrist.execute(id,{
        name,
        estado_id,
        provincia_id,
        municipio_id
      })

      return response.json(responseDistrit)
    }
}