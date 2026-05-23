import express, {
    type Application,
    type Request,
    type Response,

} from "express";
import cookieParser from "cookie-parser";;
import cors from "cors"
import globalErrorHandler from "./middlewares/globalerrorhandler";
import { resposnseHandler } from "./utility/responsehandler";
import { issuesRouter } from "./modules/issues/issues.route";
import { profileRouter } from "./modules/profiles/profile.router";
import { loginRouter } from "./middlewares/auth/auth.router";
const app: Application = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "*",
    credentials: true
}));


app.get("/", async (req: Request, res: Response) => {
    return resposnseHandler(res, 200, "Server Chalu ache",)
})

app.use("/api/issues", issuesRouter);
app.use("/api/auth", profileRouter);
app.use("/api/auth", loginRouter);
app.use(globalErrorHandler);


export default app;

