"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.text());
const userRouter = express_1.default.Router();
app.use("/", userRouter);
userRouter.get("/api/v1/users/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "Create user successfully",
        data: user,
    });
});
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// app.get("/:userId", (req: Request, res: Response) => {
//   console.log(req.params);
//   res.send("Hello Developers!");
// });
app.get("/", logger, (req, res) => {
    console.log(req.query);
    res.send("Hello Developers!");
});
// app.post("/", (req: Request, res: Response) => {
//   console.log(req.body);
//   res.send("got data");
// });
exports.default = app;
