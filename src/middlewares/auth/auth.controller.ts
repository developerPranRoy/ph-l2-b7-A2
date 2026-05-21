import type { Request, Response } from "express";
import { resposnseHandler } from "../../utility/responsehandler";
import { authService } from "./auth.service";


const loginUser = async (req: Request, res: Response) => {

    try {
        const result = await authService.loginUserDB(req.body);
        const { accessToken } = result;
        res.cookie("refresh_token", accessToken, {
            secure: false,//in production true
            httpOnly: true,
            sameSite: "lax"
        })
        return resposnseHandler(res, 201, "User login successfully!",
            result,
        );
    } catch (error: any) {
        return resposnseHandler(res, 500, " Something Wrong!", error.message);
    }

}

export const authController = {
    loginUser,
};
