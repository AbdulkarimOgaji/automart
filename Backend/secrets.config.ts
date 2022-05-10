import dotenv from "dotenv";
dotenv.config()


export default {
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET ?? "",
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET ?? "",
    dbConnectionUri: process.env.DB_CONNECTION_URI ?? "mongodb://whatslication:password@localhost:8080/automart?authSource=admin",
}