import express, { NextFunction, Request, Response } from "express";
const app = express();

app.use(express.json());
app.use(express.text());

const userRouter = express.Router();

app.use("/", userRouter);

userRouter.get("/api/v1/users/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    success: true,
    message: "Create user successfully",
    data: user,
  });
});

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

// app.get("/:userId", (req: Request, res: Response) => {
//   console.log(req.params);
//   res.send("Hello Developers!");
// });

app.get("/", logger, (req: Request, res: Response) => {
  console.log(req.query);
  res.send("Hello Developers!");
});

// app.post("/", (req: Request, res: Response) => {
//   console.log(req.body);
//   res.send("got data");
// });

export default app;
