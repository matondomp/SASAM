import { Router } from 'express'

import { GenderController } from '../controller/genderController'

const genderController=new GenderController()

const route=Router()

route.post("/",genderController.create)
route.post("/list",genderController.index)
route.put("/:id",genderController.update)

export { route as genderRoute }