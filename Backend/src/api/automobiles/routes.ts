import { Router } from "express";
import controllers from "./controllers";
import { validateRequest } from "../middleware/requestValidation";
import { createSchema } from "./validation";
import auth from "../middleware/auth";



const router = Router()

router.get('/automobile/all', controllers.getAllAutoMobiles)
router.get('/automobile/user', auth.authorizeClient, controllers.getUserAutomobiles)
router.post('/automobile',auth.authorizeClient, createSchema, validateRequest, controllers.createAutoMobile)
router.delete('/automobile',auth.authorizeClient, controllers.deleteAutoMobile)
router.get('/automobile/:id', controllers.getAutoMobileById)

export { router as automobileRouter}