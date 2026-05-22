import { Router } from "express";
import { issuesController } from "./issues.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "../../types";

const router = Router();
router.get("/", issuesController.getAllUssues)
router.get("/:id", issuesController.getIssuse)
router.post("/", auth(UserRole.MAINTAINER, UserRole.CONTRIBUTOR), issuesController.createIssues)
router.delete("/:id", auth(UserRole.MAINTAINER), issuesController.deleteIssue)
router.patch("/:id", auth(UserRole.MAINTAINER, UserRole.CONTRIBUTOR), issuesController.updateIssues)

export const issuesRouter = router;

