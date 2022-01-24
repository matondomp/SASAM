
import  { IFakeNaibarroadRepository } from '../../neibarroad/Inaibarroad/fake/fakesNaibarroadRepositNry'
import { CreateNaibarroadService } from './createNaibarroadService'


let createNaibarroadService:CreateNaibarroadService
let iFakeNaibarroadRepository:IFakeNaibarroadRepository

describe("CreateMunicipesService",()=>{
   
      beforeEach(()=>{
            iFakeNaibarroadRepository=new IFakeNaibarroadRepository()
            createNaibarroadService= new CreateNaibarroadService(iFakeNaibarroadRepository)
      })

      it("should be able to create municipes",async()=>{
           const municipe=await createNaibarroadService.execute({
                  name:"mp",
                  estado_id:"1",
                  provincia_id:"pedro",
                  distrito_id:"isabel",
                  municipio_id:"malueka"
            })

            expect(municipe.name).toBe('mp')
      })
})