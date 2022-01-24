
import { IFakePerfilRepository } from '../Iperfil/fake/fakePerfilRepository'
import { CreatePerfilRepositoryService } from './CreatePerfilService'

let createPerfilRepositoryService:CreatePerfilRepositoryService
let iFakePerfilRepository:IFakePerfilRepository

describe("CreatePerfilService",()=>{
   
      beforeEach(()=>{
            iFakePerfilRepository=new IFakePerfilRepository()
            createPerfilRepositoryService= new CreatePerfilRepositoryService(iFakePerfilRepository)
      })

      it("should be able to create perfil",async()=>{
           const municipe=await createPerfilRepositoryService.execute({
                  nome:"impresa",
                  estado_id:'1',
            })

            expect(municipe.nome).toBe('impresa')
      })
})