declare namespace Express {
    export interface Request {
        userId?: string // I pass the userId from jwt token's sub to request body
    }
 }