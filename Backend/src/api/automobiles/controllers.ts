import { Request, Response } from "express";
import { AutoMobile } from "./models";
import multer from 'multer';



const getAllAutoMobiles = (req: Request, res: Response) => {
  const { pageId, pageSize } = req.params;
  const limit = parseInt(pageSize);
  const skip = (parseInt(pageId) - 1) * parseInt(pageSize);
  AutoMobile.find({}, {}, { limit, skip })
    .then((result) =>
      res.json({
        status: "success",
        message: "Automobiles fetched successfully",
        data: result,
        error: null,
      })
    )
    .catch((err) =>
      res.status(500).json({
        status: "Failure",
        message: "error in fetching automobiles",
        error: err,
        data: null,
      })
    );
};

const getUserAutomobiles = (req: Request, res: Response) => {
 // @ts-ignore
  AutoMobile.find({sellerId: req.userId})
    .then((result) =>
      res.json({
        status: "success",
        message: "Automobiles fetched successfully",
        data: result,
        error: null,
      })
    )
    .catch((err) =>
      res.status(500).json({
        status: "Failure",
        message: "error in fetching automobiles",
        error: err,
        data: null,
      })
    );
};

const createAutoMobile = (req: Request, res: Response) => {
  
  const automobile = new AutoMobile(req.body);
  // @ts-ignore
  automobile.sellerId = req.userId;
  automobile
    .save()
    .then((result) => {
      res.status(201).json({
        status: "success",
        message: "created automobile successfully",
        error: null,
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "failure",
        message: "Failed to create automobile",
        error: err,
        data: null,
      });
    });
};

const getAutoMobileById = (req: Request, res: Response) => {
  const id = req.params.id;
  AutoMobile.findById(id)
    .then((result) => {
      res.json({
        status: "success",
        message: "fetched automobile successflly",
        error: null,
        data: result,
      });
    })
    .catch((err) =>
      res.status(500).json({
        status: "Failure",
        message: "Failed to fetch Automobile",
        error: err,
        data: null,
      })
    );
};

const updateAutoMobile = () => {};

const deleteAutoMobile = (req: Request, res: Response) => {
  const id = req.query.id
  // @ts-ignore
  AutoMobile.deleteOne({ _id: id, sellerId: req.userId })
    .then((result) => {
      if (result.deletedCount == 0) {
        res.status(401).json({
          status: "failure",
          message: "UnAuthorized to delete",
          data: result,
          error: "Unauthorized to delete this resource",
        });
      } else {
        res.json({
          status: "success",
          message: "Automobile deleted successfully",
          data: result,
          error: null,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: "failure",
        message: "Failed to delete automobile",
        error: err,
        data: null,
      });
    });
};

const multerConfig = multer.diskStorage({
  destination: (req, file, callback) =>{
    callback(null, 'static/images/automobiles')
  },
  filename: (req, file, callback) => {
    console.log("destination: ", file)
    // @ts-ignore
    const name = req.imageName || 'default'
    const ext = file.mimetype.split('/')[1]
    callback(null, name + "." + ext)
  }
})


const upload = multer({
storage: multerConfig,
fileFilter: (req, file, callback) => {

  if (file.mimetype.startsWith('image')) {
    callback(null, true)
  }else {
    callback(new Error("Only image is Allowed"))
  }
}  
})
const uploadImage = upload.single('photo')


const controllers = {
  getAllAutoMobiles,
  getUserAutomobiles,
  getAutoMobileById,
  createAutoMobile,
  deleteAutoMobile,
  uploadImage,
};

export default controllers;
