// !library imports

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// !routes imports
import postRoutes from "./routes/posts.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// !application routes
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

app.listen(3000, () => {
  console.log("sucessfullly connected to backend");
});
