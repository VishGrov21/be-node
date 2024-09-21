import User from "../models/user.model";

export const createUser = async (userName: string) => {
  const user = new User({ name: userName });
  await user.save();
  return user;
};

export const getAllUsers = async () => {
  const users = await User.find();
  return users;
};

export const getUserById = async (id: string) => {
  const user = await User.findById(id);
  return user;
};

export default {
  createUser,
  getAllUsers,
  getUserById,
};
