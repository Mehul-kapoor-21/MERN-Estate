import express from "express";
import { createListing } from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";


const listingrouter = express.Router();

listingrouter.post("/create",verifyToken, createListing);

export default listingrouter;
