import { container } from 'tsyringe'
import { Request,Response } from 'express'
import {  provinceRepository } from '../../typeorm/repository/provinceRepository'

import { CreateProvinceService } from '../../../service/createProvinceService'
import { UpdateProvinceService } from '../../../service/updateProvinceService'

export class ProvinceController{

  public async index(request:Request,response:Response):Promise<Response>{
    const repository=new provinceRepository()
    const getMunicipe= await repository.list()
    return response.json(getMunicipe)
  }
   
    public async create(request:Request,response:Response):Promise<Response>{
    
      const { 
        name,
        estado_id,
       } = request.body
       
      const createProvince= container.resolve(CreateProvinceService)
     
      const province=await createProvince.execute({
        name,
        estado_id
      })

      return response.json(province)
    }

    public async update(request:Request,response:Response):Promise<Response>{
    
      const { 
        name,
        estado_id
       } = request.body
  
      const province= container.resolve(UpdateProvinceService)
       const { id }=request.params
     
      const responseProvince=await province.execute(id,{
        name,
        estado_id
      })

      return response.json(responseProvince)
    }
}