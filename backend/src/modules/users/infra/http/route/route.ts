import { Router } from 'express'

import { UserController } from '../controller/userController'

const userController=new UserController()

const userRouter=Router()

userRouter.post('/',userController.create)
userRouter.post('/permission',userController.createWithPermissoes)
userRouter.post('/permission/:id',userController.findPermissionByUser)
userRouter.get('/',userController.index)
userRouter.put('/:id',userController.update)

export { userRouter }