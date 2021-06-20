import express from "express";
import getFarm from "./getFarm.js";

const router = express.Router();

router.get("/farm", getFarm);

export default router;

