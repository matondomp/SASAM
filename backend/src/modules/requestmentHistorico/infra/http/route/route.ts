import { Router } from 'express'

import { RequestController } from '../controller/historicoController'

const requestController=new RequestController()

const route=Router()

route.post("/",requestController.create)
route.post("/list/:id",requestController.index)
route.put("/:id",requestController.update)

export { route as historyRequestRoute }