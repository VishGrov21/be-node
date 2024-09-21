import { NextFunction, Request, Response } from "express";
import userServices from "../services/user.services";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body; // Assuming the body contains a name field
    const user = await userServices.createUser(name);
    return res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userServices.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params; // Destructure id from the request parameters
    const user = await userServices.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export default {
  createUser,
  getAllUsers,
  getUser,
};
