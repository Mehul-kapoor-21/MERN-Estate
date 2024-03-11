import express from "express";
import { createListing,deleteListing } from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";


const listingrouter = express.Router();

listingrouter.post("/create",verifyToken, createListing);
listingrouter.delete('/delete/:id',verifyToken,deleteListing);

export default listingrouter;
