import express from "express";
import { createListing,deleteListing,updateListing,getListing,getListings } from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";


const listingrouter = express.Router();

listingrouter.post("/create",verifyToken, createListing);
listingrouter.delete('/delete/:id',verifyToken,deleteListing);
listingrouter.post('/update/:id',verifyToken,updateListing);
listingrouter.get('/get/:id',getListing);
listingrouter.get('/get',getListings);

export default listingrouter;
