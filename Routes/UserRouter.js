import express from "express";
import { deleteUserProfile, loginUer, registerUser, updateUserProfile } from "../Controllers/UserController.js";
import { protect } from "../Middlewares/Auth.js";

const router = express.Router();

// ********* PUBLIC ROUTES *********
router.post("/", registerUser);
router.post("/login", loginUer);

// ********* PRIVATE ROUTES *********
router.put("/", protect, updateUserProfile);
router.delete("/", protect, deleteUserProfile);
export default router;