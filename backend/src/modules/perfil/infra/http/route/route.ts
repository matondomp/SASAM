import { Router } from 'express'

import { PerfilController } from '../controller/perfilController'

const perfilController=new PerfilController()

const perfilRouter=Router()

perfilRouter.post('/',perfilController.create)
perfilRouter.get('/',perfilController.index)
perfilRouter.put('/:id',perfilController.update)

export { perfilRouter }