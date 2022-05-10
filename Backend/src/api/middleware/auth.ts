import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../users/models";
import bcrypt from "bcrypt";
import secretsConfig from "../../../secrets.config";


export const generateToken = (userId: string) => {
  return jwt.sign(null, secretsConfig.dbConnectionUri, {
    subject: userId,
  });
};

const loginHandler = async (req: Request, res: Response) => {
  User.findOne({ email: req.body.email })
    .then(async (result) => {
      const ok = await bcrypt.compare(
        req.body.password,
        result?.passwordHash as string
      );
      if (!ok) {
        return res.status(401).json({
          status: "Failure",
          message: "password provided is incorrect",
          error: "Incorrect Password",
          data: null
        });
      }
      const token = generateToken(result.id);
      res.json({
        status: "success",
        message: "login successful, token generated successfully",
        data: token,
        error: null
      });
    })
    .catch((err) => {
      return res.status(404).json({
        status: "Failure",
        message: "User does not exist",
        error: err,
        data: null,
      });
    });

};

const authorizeClient = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];
  if (token == null || token === "") {
    return res.status(401).json({
      status: "Failure",
      message: "No token provided in Authorization Header",
      error: "No token",
      data: null,
    });
  }
  jwt.verify(token, secretsConfig.accessTokenSecret, (err, payload) => {
    if (err)
      return res.status(403).json({
        status: "Failure",
        message: "Invalid token",
        error: err,
        data: null,
      });
      req.userId = (payload as JwtPayload).sub
    next();
  });
};



export default {
  loginHandler,
  authorizeClient,
};
