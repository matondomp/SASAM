import { Request,Response } from 'express'
import { container } from 'tsyringe'

import { UserRepository } from '../../typeorm/repository/userRepository'
import { CreateUserRepositoryService } from '../../../service/CreateUserService'
import { UpdateUserRepositoryService } from '../../../service/UpdateUserService'

export class UserController{
    public async index(request:Request,response:Response):Promise<Response>{
        const { filter }=request.body
    
        const repository=new UserRepository()
        const user= await repository.list(filter)
        
        return response.json(user)
      
      }
      public async findPermissionByUser(request:Request,response:Response):Promise<Response>{
        const { id }=request.params
    
        const repository=new UserRepository()
        const permissao= await repository.findPermissioByUserId(id)
        
        return response.json(permissao)
      }
      public async createWithPermissoes(request:Request,response:Response):Promise<Response>{
        const { permissao }=request.body
        console.log(permissao)
      
        const repository=new UserRepository()
        const user= await repository.createWithPermission(permissao)

        return response.json(user)
      }
        public async create(request:Request,response:Response):Promise<Response>{
        
          const { 
            name,
            email,
            telefone,
            password,
            estado_id,
            perfil_id
           } = request.body
           
          const create= container.resolve(CreateUserRepositoryService)
          
          const typeMunicipe=await create.execute({
            name:name.toUpperCase(),
            email,
            telefone,
            username:name.toUpperCase(),
            password,
            estado_id,
            perfil_id
          })
    
          return response.json(typeMunicipe)
        }
    
        public async update(request:Request,response:Response){
          const { id }=request.params
          const { 
            name,
            email,
            telefone,
            password,
            estado_id,
            perfil_id
           } = request.body
         
          const updateService=container.resolve(UpdateUserRepositoryService)
          const state=await updateService.execute(id,{ 
            name,
            email,
            telefone,
            password,
            estado_id,
            perfil_id
           })
    
          return response.json(state)
        }
}