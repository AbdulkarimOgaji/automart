import { Response, Request } from "express";
import { User } from "./models";
import { Error } from "mongoose";
import { MongoError } from "mongodb";
import bcrypt from "bcrypt";

const createUser = async(req: Request, res: Response) => {
  const newUser = new User(req.body);
  newUser.passwordHash = await bcrypt.hash(req.body.password, 10)
  newUser
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "user created successfuly",
        payload: result,
      });
    })
    .catch((err) => {
      if (err instanceof Error.ValidationError) {
        res.status(400).json({
          success: false,
          message: err.message,
          error: err.errors,
        });
      } else if ((err as MongoError).code === 11000) {
        res.status(400).json({
          success: false,
          message: "email or phone number belongs to another user",
          error: err,
        });
      } else {
        res.status(500).json({
          success: false,
          error: err,
        });
      }
    });
};

const getUsers = (req: Request, res: Response) => {
  User.find()
    .then((result) =>
      res.json({
        success: true,
        message: "Users fetched successfully",
        payload: result,
      })
    )
    .catch((err) =>
      res.status(500).json({
        success: false,
        message: "error in fetching users",
        error: err,
      })
    );
};

const getUsersById = (req: Request, res: Response) => {
  User.findById(req.params.id)
    .then((result) =>
      res.json({
        success: true,
        message: "User fetched successfully",
        payload: result,
      })
    )
    .catch((err) => {
        console.log(err)
      if (err instanceof Error.CastError) {
        res.status(400).json({
          success: false,
          messsage: err.message,
          error: err,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "error in fetching user",
          error: err,
        });
      }
    });
};

const updateUser = (req: Request, res: Response) => {
  User.updateOne({ _id: req.params.id }, req.body)
    .then((result) =>
      res.json({
        success: true,
        message: "User updated successfully",
        payload: result,
      })
    )
    .catch((err) =>
      res.json({
        success: false,
        message: "Failed to update user",
        error: err,
      })
    );
};

const deleteUser = (req: Request, res: Response) => {
  User.deleteOne({ _id: req.params.id })
    .then((result) =>
      res.status(204).json({
        success: true,
        message: "User deleted successfully",
        payload: result,
      })
    )
    .catch((err) =>
      res.json({
        success: false,
        message: "Failed to delete User",
        error: err,
      })
    );
};
const userHandlers = {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  getUsersById,
};

export default userHandlers;
