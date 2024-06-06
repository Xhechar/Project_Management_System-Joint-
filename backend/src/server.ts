import express, {
  NextFunction,
  Request,
  Response,
  json,
  request,
} from "express";
import { my_route } from "./routers/project.route";

const app = express();

app.use(json());
app.use("/projects", my_route);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.json({
    err: err.message,
  });
});

let PORT = 5302;

app.listen(5302, () => {
  console.log(`Server running on port ${PORT} ...`);
});
