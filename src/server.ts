import app from "./app";
import { initDB } from "./db";

await initDB();

export default app;