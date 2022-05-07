import { Request, Response } from "express"
export const healthChecker = (req: Request, res: Response) => {
    res.json({status: "success", data: "some data"})
}