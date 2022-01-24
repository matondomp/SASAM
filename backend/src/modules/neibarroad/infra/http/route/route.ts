import { Router } from 'express'

import { NaibarroadController } from '../controller/NaibarroadController'

const naibarroadController=new NaibarroadController()

const route=Router()

route.post("/",naibarroadController.create)
route.get("/",naibarroadController.index)
route.put("/:id",naibarroadController.update)

export { route as naibarroadRoute }