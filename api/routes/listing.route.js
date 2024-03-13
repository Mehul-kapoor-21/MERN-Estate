import express from "express";
import { createListing,deleteListing,updateListing,getListing } from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";


const listingrouter = express.Router();

listingrouter.post("/create",verifyToken, createListing);
listingrouter.delete('/delete/:id',verifyToken,deleteListing);
listingrouter.post('/update/:id',verifyToken,updateListing);
listingrouter.get('/get/:id',getListing);

export default listingrouter;
