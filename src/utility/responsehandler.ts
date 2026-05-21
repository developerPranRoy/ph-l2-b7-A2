import type { Response } from "express";

export const resposnseHandler = (
    res: Response,
    statusCode: number,
    message: string,
    data: any = {},
) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};
