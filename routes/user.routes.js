const express = require("express");

const {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUserById,
} = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/", createNewUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUserById);

module.exports = userRouter;
