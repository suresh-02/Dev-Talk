import express from "express";
import { addpost } from "../controllers/posts.controller.js";

const router = express.Router();

router.get("/test", addpost);

export default router;
