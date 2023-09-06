import express from "express";
import {
  getAllUsers,
  createNewUser,
  getUserById,
  specialFunc,
  updateUser,
  deleteUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", createNewUser);

router.get("/userid/special", specialFunc);

router.route("/userid/:id").put(updateUser).delete(deleteUser).get(getUserById);

export default router;

// router.get("/userid/:id", getUserById);

// router.put("/userid/:id", updateUser);

// router.delete("/userid/:id", deleteUser);
