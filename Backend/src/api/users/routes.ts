import { Router } from "express";
import controllers from "./controllers";
import { validateRequest } from "../middleware/requestValidation";
import { createSchema } from "./validation";



const router = Router()

router.get('/user/:id', controllers.getUserById )
router.post('/user/create', createSchema, validateRequest, controllers.createUser)
router.patch('/user', createSchema, validateRequest, controllers.updateUser)
router.delete('/user', controllers.deleteUser)

export { router as userRouter}