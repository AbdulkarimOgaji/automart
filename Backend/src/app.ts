import express, { Express } from "express";
import mongoose from "mongoose";
import { automobileRouter } from "./api/automobiles/routes";
import { userRouter } from './api/users/routes'


const myBodyParser = express.json()

const DB_CONNECTION_URI = "mongodb://whatslication:password@localhost:8080/automart?authSource=admin"


const app: Express = express()

app.use(myBodyParser)
app.use(automobileRouter)
app.use(userRouter)

mongoose.connect(DB_CONNECTION_URI)
.then(() => app.listen(8000))
.catch(err => console.log(err))




