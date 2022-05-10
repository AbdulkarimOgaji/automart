import { Router } from "express";
import controllers from "./controllers";
import { validateRequest } from "../middleware/requestValidation";
import { createSchema } from "./validation";



const router = Router()

router.get('/automobile/all', controllers.getAllAutoMobiles)
router.post('/automobile', createSchema, validateRequest, controllers.uploadImage, controllers.createAutoMobile)
router.delete('/automobile', controllers.deleteAutoMobile)
router.get('/automobile/:id', controllers.getAutoMobileById)
router.post('/automobile/uploadImage', controllers.uploadImage,)

export { router as automobileRouter}