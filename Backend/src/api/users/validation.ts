import { body } from 'express-validator';


const createUserSchema = [
    body('firstName').exists({checkFalsy: true, checkNull: true}),
    body('lastName').exists({checkFalsy: true, checkNull: true}),
    body('displayPic').optional(),
    body('email').exists({checkFalsy: true, checkNull: true}).isEmail(),
    body('phoneNum').exists({checkFalsy: true, checkNull: true}).isNumeric(),
    body('password').isLength({min: 6}).exists({checkFalsy: true, checkNull: true})
]

export { createUserSchema as createSchema}

