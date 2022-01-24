import { Router } from 'express'

import { IdentityController } from '../controller/IdentityController'

const identityController=new IdentityController()

const route=Router()

route.post("/",identityController.create)
route.post("/list/:id",identityController.index)
route.put("/:id",identityController.update)

export { route as identityRoute }