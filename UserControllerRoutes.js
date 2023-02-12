import express from "express";

const router =  express.Router()
import { creates, deletes, finds, update } from "./UserController.js";


router.post("/create/",creates);
router.post("/find/",finds);
router.post("/update/",update);
router.post("/delete/",deletes);

export default router;