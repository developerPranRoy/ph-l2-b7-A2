import { pool } from "../../db"
import type { TCreateIssue, TUpdateIssue } from "../../types";

const getAllUssuesDB = async () => {
    const result = await pool.query(`
        SELECT * FROM issues
        `)
    return result.rows
}

const getIssuseDb = async (id: number) => {
    const result = await pool.query(
        `
             SELECT * FROM issues WHERE id=$1
        `,
        [id],
    );
    return result;
};

const createIssuseDB = async (payload: TCreateIssue) => {
    const { title, description, type, reporter_id } = payload;

    const result = await pool.query(
        `
    INSERT INTO issues (title, description, type, reporter_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
        [title, description, type, reporter_id]
    );

    return result.rows[0];
};

const updateIssueDB = async (id: number, payload: TUpdateIssue) => {
    const { title, description, type, status } = payload;

    const result = await pool.query(
        `
    UPDATE issues
    SET
      title = COALESCE($1, title),
      description = COALESCE($2, description),
      type = COALESCE($3, type),
      status = COALESCE($4, status),
      updated_at = CURRENT_TIMESTAMP
    WHERE id = $5
    RETURNING *
    `,
        [title, description, type, status, id]
    );

    return result;
};
const deleteIssueDB = async (id: number) => {
    const result = pool.query(`
             DELETE FROM issues WHERE id=$1
           RETURNING * `,
        [id],);
    return result;
}

export const issuesService = {
    getAllUssuesDB,
    getIssuseDb,
    createIssuseDB,
    updateIssueDB,
    deleteIssueDB,
}