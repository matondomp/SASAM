import { Router } from 'express'

import { TypeMunicipeController } from '../controller/typeMunicipeController'

const typeMunicipeController=new TypeMunicipeController()

const route=Router()

route.post("/",typeMunicipeController.create)
route.post("/list",typeMunicipeController.index)
route.put("/:id",typeMunicipeController.update)

export { route as typeMUnicipeRoute }