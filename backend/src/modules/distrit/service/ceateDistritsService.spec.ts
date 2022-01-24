
import { IDistrit } from '../Idistrit/IDistrit'
import  { IFakeDistritRepository } from '../../distrit/Idistrit/fake/fakeDistritRepository'
import { CreateDistritsService } from './createDistritsService'


let createDistritsService:CreateDistritsService
let iFakeDistritsRepository:IFakeDistritRepository

describe("CreateMunicipesService",()=>{
   
      beforeEach(()=>{
            iFakeDistritsRepository=new IFakeDistritRepository()
            createDistritsService= new CreateDistritsService(iFakeDistritsRepository)
      })

      it("should be able to create municipes",async()=>{
           const municipe=await createDistritsService.execute({
                  name:"luanda",
                  estado_id:"1",
                  municipio_id:"1",
                  provincia_id:"1",
            })

            expect(municipe.name).toBe('luanda')
      })
})