import express from "express"

import { postUser, getUser } from "../controllers/user.js";

const router=express.Router();

router.post("/postUser",postUser);
router.get("/us/:id",getUser);

export default router;