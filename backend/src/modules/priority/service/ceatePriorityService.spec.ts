

import  { IFakePriorityRepository } from '../Ipriority/fake/fakePriorityRepository'
import { CreatePriprityService } from './createPriorityService'


let createPriprityService:CreatePriprityService
let ifakePriorityRepository:IFakePriorityRepository

describe("CreateMunicipesService",()=>{
   
      beforeEach(()=>{
            ifakePriorityRepository=new IFakePriorityRepository()
            createPriprityService= new CreatePriprityService(ifakePriorityRepository)
      })

      it("should be able to create municipes",async()=>{
           const municipe=await createPriprityService.execute({
                  description:"luanda",
                  estado_id:"1",
                  slug:"1",
                  user_id:"2"
            })

            expect(municipe.description).toBe('luanda')
      })
})