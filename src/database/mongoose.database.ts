import mongoose from "mongoose";
import { MONGODB_URI } from "../constants/app.constants";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err: any) => {
    console.error("Error connecting to MongoDB", err);
  });
