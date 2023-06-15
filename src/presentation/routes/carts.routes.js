import { Router } from "express";
import {
  createCart,
  findCartById,
  updateCart,
  deleteProduct,
  deleteProducts,
  updateAllProducts,
  updateQuantity,
} from "../controllers/cartsController.js";
import auth from "../middlewares/auth.js";

const router = Router();

router.post("/", auth, createCart);
router.get("/:cid", auth, findCartById);
router.post("/:cid/product/:pid", auth, updateCart);
router.delete("/:cid/product/:pid", auth, deleteProduct);
router.delete("/:cid", auth, deleteProducts);
router.put("/:cid", auth, updateAllProducts);
router.put("/:cid/product/:pid", auth, updateQuantity);

export default router;
