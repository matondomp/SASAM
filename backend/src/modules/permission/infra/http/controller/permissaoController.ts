import { Request,Response } from 'express'
import { container } from 'tsyringe'

import { PermissionRepository } from '../../typeorm/repository/permissionRepository'
import { CreatePermissionRepositoryService } from '../../../service/CreatePermissionService'
import { UpdatePermissionRepositoryService } from '../../../service/UpdatePermissoesService'

export class PermissaoController{
    public async index(request:Request,response:Response):Promise<Response>{
        const { filter }=request.body
        console.log("state",filter)
        const repository=new PermissionRepository()
        const user= await repository.list(filter)
        return response.json(user)
      }
       
        public async create(request:Request,response:Response):Promise<Response>{
        
          const { 
            nome,
            description,
            flag,
           } = request.body
           
          const create= container.resolve(CreatePermissionRepositoryService)
         
          const typeMunicipe=await create.execute({
            description,
            flag ,
            nome,
          })
    
          return response.json(typeMunicipe)
        }
    
        public async update(request:Request,response:Response){
          const { id }=request.params
          const { 
            nome,
            description,
            flag,
           } = request.body
           
          
          const updateService=container.resolve(UpdatePermissionRepositoryService)
          const state=await updateService.execute(id,{ 
            nome,
            description,
            flag,
           })
    
          return response.json(state)
        }
}