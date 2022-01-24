
import  { IFakeProvinceRepository } from '../../province/Iprovince/fake/fakeProvinceRepository'
import { CreateProvinceService } from './createProvinceService'


let createProvinceService:CreateProvinceService
let iFakeProvinceRepository:IFakeProvinceRepository

describe("CreateMunicipesService",()=>{
   
      beforeEach(()=>{
            iFakeProvinceRepository=new IFakeProvinceRepository()
            createProvinceService= new CreateProvinceService(iFakeProvinceRepository)
      })

      it("should be able to create municipes",async()=>{
           const municipe=await createProvinceService.execute({
                  name:"mp",
                  estado_id:"1"
            })

            expect(municipe.name).toBe('mp')
      })
})