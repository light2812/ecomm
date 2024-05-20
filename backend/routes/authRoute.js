import express from "express";
import userModel from "../models/userModel.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleWare.js";
import {
  registerController,
  loginController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";

//router object
const router = express.Router();

//routing
//REGISTER
router.post("/register", registerController);
//LOGIN
router.post("/login", loginController);

//protected user
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected admin
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);
//orders
router.get("/orders", requireSignIn, getOrdersController);
//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

// Fetch all users (admin only)
router.get("/users", requireSignIn, isAdmin, async (req, res) => {
  try {
    const users = await userModel.find({}, "name email phone address role");
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
export default router;
