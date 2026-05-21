import type { Request, Response } from "express";
import { resposnseHandler } from "../../utility/responsehandler";
import { userService } from "./profile.service";


const createUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.createUserDB(req.body);
        return resposnseHandler(res, 201, "User created successfully", result.rows[0])
    } catch (error: any) {
        return resposnseHandler(res, 500, "User not created", error.message)
    }

}

export const userController = {
    createUser,
}