import { Router } from 'express'

import { RequestController } from '../controller/requestmentController'

const requestController=new RequestController()

const route=Router()

route.post("/",requestController.create)
route.post("/list",requestController.index)
route.put("/:id",requestController.update)

export { route as requestRoute }