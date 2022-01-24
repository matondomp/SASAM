import { Router } from 'express'

import { DistritController } from '../controller/distritController'

const distritController=new DistritController()

const route=Router()

route.post("/",distritController.create)
route.post("/list",distritController.index)
route.put("/:id",distritController.update)

export { route as distritRoute }