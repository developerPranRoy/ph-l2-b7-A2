import { pool } from "../../db";
import type { IUser } from "../../types/types";

import bcrypt from "bcrypt"

const createUserDB = async (payload: IUser) => {
    const { name, email, password, role } = payload;

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
        `
        INSERT INTO users (name, email,password,role
        )
        VALUES ($1, $2, $3, COALESCE($4, 'contributor'))
        RETURNING id, name, email, role, created_at, updated_at
        `,
        [name, email, hashedPassword, role]
    );
    delete result.rows[0].password;

    return result;
};


export const userService = {
    createUserDB,
}