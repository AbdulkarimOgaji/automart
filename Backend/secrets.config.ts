import dotenv from "dotenv";
dotenv.config()


export default {
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET ?? "",
    dbConnectionUri: process.env.DB_CONNECTION_URI ?? "mongodb://whatslication:password@localhost:8080/automart?authSource=admin",
    frontEndUrl: process.env.FRONTEND_URL ?? "http://localhost:3000"
}