import config from "../../config/config";
import { pool } from "../../db";
import type { IAuth, IUser } from "../../types";
import bcrypt from "bcrypt";
import jwt, { type JwtPayload } from "jsonwebtoken";




const loginUserDB = async (payload: IAuth) => {
    const { email, password } = payload;

    const userData = await pool.query(`
        SELECT * FROM users WHERE email=$1
    `,
        [email]);
    if (userData.rows.length === 0) {
        throw new Error("Invalid Credential!");
    }
    const user = userData.rows[0];
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
        throw new Error("Invalid Credential!");
    }

    const jwtPayload = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
    }

    const accessToken = jwt.sign(jwtPayload, config.secret as string, {
        expiresIn: "1d",
    })
    return { accessToken }
}

export const authService = {
    loginUserDB,
};
