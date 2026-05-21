import express, {
    type Application,
    type Request,
    type Response,

} from "express";
// import { userRoute } from "./modules/user/user.routes";
// import { profileRoute } from "./modules/profile/profile.route";
// import { authRouter } from "./modules/auth/auth.route";
import cookePerser from "cookie-parser"
import cors from "cors"
import globalErrorHandler from "./middlewares/globalerrorhandler";
import { resposnseHandler } from "./utility/responsehandler";
import { issuesRouter } from "./modules/issues/issues.route";
const app: Application = express();

app.use(cookePerser());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:8000',
}));


app.get("/", async (req: Request, res: Response) => {
    return resposnseHandler(res, 200, "Server Chalu ache",)
})

app.use("/api/issues", issuesRouter);

export default app;

