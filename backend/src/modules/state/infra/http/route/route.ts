import { Router } from 'express'

import { StateController } from '../controller/stateController'

const stateController=new StateController()

const route=Router()

route.post("/",stateController.create)
route.post("/list",stateController.index)
route.put("/:id",stateController.update)

export { route as stateRoute }