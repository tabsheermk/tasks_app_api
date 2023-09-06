import User from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.json({
    success: true,
    users,
  });
};

export const createNewUser = async (req, res) => {
  const { name, email, password } = req.body;

  await User.create({
    name,
    email,
    password,
  });
  res.json({
    success: true,
    message: "Registered Successfully",
  });
};

export const specialFunc = async (req, res) => {
  res.json({
    success: true,
    message: "lol this a special route",
  });
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  res.json({
    success: true,
    user,
  });
};

export const updateUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  res.json({
    success: true,
    message: "user updated",
  });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);

  res.json({
    success: true,
    message: "Deleted Successfully",
  });
};
