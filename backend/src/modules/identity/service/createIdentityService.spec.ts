
import  { IFakeIdentityRepository } from '../Iidentity/fake/fakeIdentityRepository'
import { CreateIdentityService } from './createIdentityService'


let createIdentityService:CreateIdentityService
let iFakeIdentityRepository:IFakeIdentityRepository

describe("CreateMunicipesService",()=>{
   
      beforeEach(()=>{
            iFakeIdentityRepository=new IFakeIdentityRepository()
            createIdentityService= new CreateIdentityService(iFakeIdentityRepository)
      })

      it("should be able to create municipes",async()=>{
           const municipe=await createIdentityService.execute({
                  name:"activo",
                  municipe_id:'2',
                  estado_id:'2'
            })

            expect(municipe.name).toBe('activo')
      })
})