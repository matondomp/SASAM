import { Router } from 'express'

import { MunicipeController } from '../controller/municipeController'

const municipeController=new MunicipeController()

const route=Router()

route.post("/",municipeController.create)
route.get("/",municipeController.index)
route.put("/:id",municipeController.update)

export { route as municipeRoute }