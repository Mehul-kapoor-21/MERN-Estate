import express from "express";
import { createListing,deleteListing,updateListing } from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";


const listingrouter = express.Router();

listingrouter.post("/create",verifyToken, createListing);
listingrouter.delete('/delete/:id',verifyToken,deleteListing);
listingrouter.post('/update/:id',verifyToken,updateListing);

export default listingrouter;
