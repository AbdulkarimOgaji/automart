import express, { Express } from "express";
import mongoose from "mongoose";
import { automobileRouter } from "./api/automobiles/routes";
import { userRouter } from './api/users/routes'
import secretsConfig from "../secrets.config";


const myBodyParser = express.json()

const app: Express = express()

app.use(myBodyParser)
app.use(automobileRouter)
app.use(userRouter)

mongoose.connect(secretsConfig.dbConnectionUri)
.then(() => app.listen(8000))
.catch(err => console.log(err))




