import express, { Express } from "express";
import mongoose from "mongoose";
import { automobileRouter } from "./api/automobiles/routes";
import { userRouter } from "./api/users/routes";
import secretsConfig from "../secrets.config";

const myBodyParser = express.json();

const app: Express = express();


// allow access origin
app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', secretsConfig.frontEndUrl);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(myBodyParser);
app.use(automobileRouter);
app.use(userRouter);

mongoose
  .connect(secretsConfig.dbConnectionUri)
  .then(() => {
    console.log("Server Now listening on Port 8000");
    app.listen(8000);
  })
  .catch((err) => console.log(err));
