import { Router } from 'express'

import { PriorityController } from '../controller/priorityController'

const priorityController=new PriorityController()

const route=Router()

route.post("/",priorityController.create)
route.post("/list",priorityController.index)
route.put("/:id",priorityController.update)

export { route as priorityRoute }