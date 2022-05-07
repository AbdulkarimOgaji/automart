import express, { Express } from "express";
import mongoose from "mongoose";
import { healthChecker } from "./api";


const myBodyParser = express.json()

const DB_CONNECTION_URI = "mongodb://whatslication:password@localhost:8080/automart?authSource=admin"


const app: Express = express()

app.use(myBodyParser)

mongoose.connect(DB_CONNECTION_URI)
.then(() => app.listen(8000))
.catch(err => console.log(err))



app.get('/', healthChecker)


