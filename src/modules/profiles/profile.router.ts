import { Router } from "express";
import { userController } from "./profile.controller";

const router = Router()
router.post("/signup", userController.createUser)

export const profileRouter = router;
