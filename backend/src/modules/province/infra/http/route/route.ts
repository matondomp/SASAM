import { Router } from 'express'

import { ProvinceController } from '../controller/provinceController'

const provinceController=new ProvinceController()

const route=Router()

route.post("/",provinceController.create)
route.get("/",provinceController.index)
route.put("/:id",provinceController.update)

export { route as provinceRoute }