import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import allUsersRoute from "./UserControllerRoutes.js"

mongoose.set("strictQuery", true);
const app = express();
app.use(bodyParser.json());
app.use(express.json());

dotenv.config();

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongodb");
    } catch (error) {
      throw error;
    }
  };

  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected");
  });
  
  app.use(cors());
  app.use("/api/v1/users/", allUsersRoute); //For creating a user we implement this

  app.listen(8000, () => {
    connect();
    console.log("Connected to backend");
  });