import app from "./app";
import config from "./config/config";
import { initDB } from "./db";

const main = async () => {
    await initDB();

    const isVercel = process.env.VERCEL === "1" || process.env.NODE_ENV === "production";

    if (!isVercel) {
        const port = config.port || 5000;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
};

main();

export default app;