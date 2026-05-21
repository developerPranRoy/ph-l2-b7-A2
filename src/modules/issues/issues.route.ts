import { Router } from "express";
import { issuesController } from "./issues.controller";

const router = Router();
router.get("/", issuesController.getAllUssues)
router.get("/:id", issuesController.getIssuse)
router.post("/", issuesController.createIssues)
router.delete("/:id", issuesController.deleteIssue)
router.patch("/:id", issuesController.updateIssues)

export const issuesRouter = router;

