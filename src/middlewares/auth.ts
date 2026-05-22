import type { NextFunction, Request, Response } from "express";
import type { UserRole } from "../types/types";
import { resposnseHandler } from "../utility/responsehandler";
import { error } from "node:console";
import jwt, { type JwtPayload } from "jsonwebtoken"
import config from "../config/config";
import { pool } from "../db";



const auth = (...roles: UserRole[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.headers.authorization;
            if (!token) {
                return resposnseHandler(res, 401, "Unauthorized access!!", error);
            }
            const decoded = jwt.verify(token, config.secret as string) as JwtPayload

            const userData = await pool.query(`
                 SELECT * FROM users WHERE email=$1
                `, [decoded.email])

            const user = userData.rows[0];
            // console.log(user);
            if (userData.rows.length == 0) {
                return resposnseHandler(res, 404, "User not found!", error)
            }
            if (roles.length && !roles.includes(user.role)) {
                return resposnseHandler(res, 403, "Access denied!",);
            }

            req.user = user
            next()
        } catch (error) {
            next(error)
        }
    }
}

export default auth