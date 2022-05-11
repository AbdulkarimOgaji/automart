import { Router } from "express";
import controllers from "./controllers";
import { validateRequest } from "../middleware/requestValidation";
import { createSchema } from "./validation";
import auth from "../middleware/auth";



const router = Router()

router.get('/automobile/all', controllers.getAllAutoMobiles)
router.post('/automobile',auth.authorizeClient, createSchema, validateRequest, controllers.uploadImage, controllers.createAutoMobile)
router.delete('/automobile',auth.authorizeClient, controllers.deleteAutoMobile)
router.get('/automobile/:id',auth.authorizeClient, controllers.getAutoMobileById)
router.post('/automobile/uploadImage',auth.authorizeClient, controllers.uploadImage)

export { router as automobileRouter}