import type { Request, Response } from "express";
import { resposnseHandler } from "../../utility/responsehandler";
import { issuesService } from "./issues.service";
import type { JwtPayload } from "jsonwebtoken";


const getAllUssues = async (req: Request, res: Response) => {
    try {
        const result = await issuesService.getAllUssuesDB(req.query);
        return resposnseHandler(res, 200, "Issues  retrieved successfully", { result })
    } catch (error: any) {
        return resposnseHandler(res, 500, "Internal server error", error.message)
    }
}

const getIssuse = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    try {
        const result = await issuesService.getIssuseDb(id);
        if (result.rows.length > 0) {
            return resposnseHandler(res, 200, "Issuses retrived succesfully", result.rows[0])
        } else {
            return resposnseHandler(res, 404, "Issuse not found!",)
        }
    } catch (error: any) {
        return resposnseHandler(res, 500, "Somthing wrong", error.message)
    }
};

const createIssues = async (req: Request, res: Response) => {
    try {
        const result = await issuesService.createIssuseDB(req.body);
        return resposnseHandler(res, 201, "Issuse created successfully", result)
    } catch (error: any) {
        return resposnseHandler(res, 500, "Somthing wrong", error.message)
    }

}

const updateIssues = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    try {
        const result = await issuesService.updateIssueDB(id, req.body, req.user as JwtPayload)

        if (result.rows.length > 0) {
            return resposnseHandler(res, 200, "Issuses updated successfully!", result.rows[0],);
        } else {
            return resposnseHandler(res, 404, "Issuses not found!");
        }

    } catch (error: any) {
        return resposnseHandler(res, 500, "Something went wrong!", error.message);
    }
}

const deleteIssue = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    try {
        const result = await issuesService.deleteIssueDB(id);
        if (result.rows.length > 0) {
            return resposnseHandler(res, 200, "Issue deleted successfully",)
        } else {
            return resposnseHandler(res, 200, "Issue not found!")
        }
    } catch (error: any) {
        return resposnseHandler(res, 500, "Failed to delete issue", error.message)
    }
}

export const issuesController = {
    getAllUssues,
    getIssuse,
    createIssues,
    updateIssues,
    deleteIssue,
}