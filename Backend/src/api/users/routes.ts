import { Router } from "express";
import controllers from "./controllers";
import { validateRequest } from "../middleware/requestValidation";
import { createSchema } from "./validation";
import auth from "../middleware/auth";


const router = Router()

router.get('/user/:id', controllers.getUserById )
router.post('/user/create', createSchema, validateRequest, controllers.createUser)
router.patch('/user',auth.authorizeClient, createSchema, validateRequest, controllers.updateUser)
router.delete('/user',auth.authorizeClient, controllers.deleteUser)
router.post('/login', auth.loginHandler)

export { router as userRouter}