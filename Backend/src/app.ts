import express, { Express } from "express";
import mongoose from "mongoose";
import { automobileRouter } from "./api/automobiles/routes";
import { userRouter } from "./api/users/routes";
import secretsConfig from "../secrets.config";

const myBodyParser = express.json();

const app: Express = express();

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Pass to next layer of middleware
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
