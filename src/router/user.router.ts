import { Router } from "express";
import userController from "../controller/user.controller";

export const usersRouter = Router();

// Route to create a new user
usersRouter
  .route("/")
  .post(userController.createUser)
  .get(userController.getAllUsers);

// Route to get a specific user by ID
usersRouter.route("/:id").get(userController.getUser);
