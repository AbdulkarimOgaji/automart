import { Response, Request } from "express";
import { User } from "./models";
import { Error } from "mongoose";
import { MongoError } from "mongodb";
import bcrypt from "bcrypt";

import { generateToken } from "../middleware/auth";

const createUser = async(req: Request, res: Response) => {
  const newUser = new User(req.body);
  newUser.passwordHash = await bcrypt.hash(req.body.password, 10)
  newUser
    .save()
    .then((result) => {
      const token = generateToken(result.id)
      res.status(201).json({
        status: "success",
        message: "user created successfuly",
        data: result,
        token,
        error: null,
      });
    })
    .catch((err) => {
      if (err instanceof Error.ValidationError) {
        res.status(400).json({
          status: "failure",
          message: err.message,
          error: err.errors,
          data: null,
        });
      } else if ((err as MongoError).code === 11000) {
        res.status(400).json({
          status: "failure",
          message: "email or phone number belongs to another user",
          error: err,
          data: null
        });
      } else {
        res.status(500).json({
          status: "failure",
          error: err,
          message: "Internal Server Error",
          data: null,
        });
      }
    });
};

const getUsers = (req: Request, res: Response) => {
  User.find({}, "firstName lastName displayPic email phoneNum")
    .then((result) =>
      res.json({
        status: "success",
        message: "Users fetched successfully",
        data: result,
        error: null,
      })
    )
    .catch((err) =>
      res.status(500).json({
        status: "failure",
        message: "error in fetching users",
        error: err,
        data: null,
      })
    );
};

const getUserById = (req: Request, res: Response) => {
  User.findById(req.params.id, "firstName lastName displayPic email phoneNum")
    .then((result) =>
      res.json({
        status: "success",
        message: "User fetched successfully",
        data: result,
        error: null
      })
    )
    .catch((err) => {
        console.log(err)
      if (err instanceof Error.CastError) {
        res.status(400).json({
          status: "failure",
          messsage: err.message,
          error: err,
          data: null
        });
      } else {
        res.status(500).json({
          status: "failure",
          message: "error in fetching user",
          error: err,
          data: null
        });
      }
    });
};

const updateUser = (req: Request, res: Response) => {
  // @ts-ignore
  User.updateOne({ _id: req.userId }, req.body)
    .then((result) =>
      res.json({
        status: "success",
        message: "User updated successfully",
        data: result,
        error: null,
      })
    )
    .catch((err) =>
      res.json({
        status: "failure",
        message: "Failed to update user",
        error: err,
        data: null,
      })
    );
};

const deleteUser = (req: Request, res: Response) => {
  // @ts-ignore
  User.deleteOne({ _id: req.userId })
    .then((result) => {
      if (result.deletedCount == 0) {
        res.status(404).json({
          status: "failure",
          message: "User does not exist",
          payload: result,
          error: "User does not exist"
        })
      }else {
        res.status(200).json({
          status: "success",
          message: "User deleted successfully",
          payload: result,
          error: null,
        })
      }
      
    }
      
    )
    .catch((err) =>
      res.json({
        success: false,
        message: "Failed to delete User",
        error: err,
      })
    );
};

const controllers = {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  getUserById,
};

export default controllers;
