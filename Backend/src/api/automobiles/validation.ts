import { body } from 'express-validator';




const createAutoMobile = [
    body('imageUrl').optional(),
    body('type').exists({checkFalsy: true, checkNull: true}),
    body('model').exists({checkFalsy: true, checkNull: true}),
    body('price').isNumeric().exists({checkFalsy: true, checkNull: true})
]

export { createAutoMobile as createSchema}