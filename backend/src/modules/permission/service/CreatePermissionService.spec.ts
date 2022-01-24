
import { IFakePermissionRepository } from '../Ipermission/fake/fakePermissionRepository'
import { CreatePermissionRepositoryService } from './CreatePermissionService'

let createPermissionRepositoryService:CreatePermissionRepositoryService
let iFakePermissionRepository:IFakePermissionRepository

describe("CreatePermissionService",()=>{
   
      beforeEach(()=>{
            iFakePermissionRepository=new IFakePermissionRepository()
            createPermissionRepositoryService= new CreatePermissionRepositoryService(iFakePermissionRepository)
      })

      it("should be able to create permissoes",async()=>{
           const municipe=await createPermissionRepositoryService.execute({
                  nome:"impresa",
                  description:'mp',
                  flag:"mp"
            })

            expect(municipe.nome).toBe('impresa')
      })
})