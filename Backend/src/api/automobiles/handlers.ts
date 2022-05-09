import { Request, Response } from 'express';
import { AutoMobile } from './models';

const getAllAutoMobiles = (req: Request, res: Response) => {
    AutoMobile.find()
      .then((result) =>
        res.json({
          success: true,
          message: "Automobiles fetched successfully",
          payload: result,
        })
      )
      .catch((err) =>
        res.status(500).json({
          success: false,
          message: "error in fetching automobiles",
          error: err,
        })
      );
  };


