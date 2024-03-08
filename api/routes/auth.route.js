import express from "express";
import { google, signin, signup, signOut } from "../controllers/auth.controller.js";

const authRoute = express.Router();

authRoute.post("/signup", signup);
authRoute.post("/signin", signin);
authRoute.post("/google",google);
authRoute.get("/signout",signOut);

export default authRoute;
