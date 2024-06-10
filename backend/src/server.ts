// <<<<<<< HEAD
// import express, { NextFunction, Request, Response, json } from "express";
// import user_router from "./routers/user.router";

// const app = express()

// app.use(json())
// app.use('/users', user_router)

// app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
//     res.json({
//         message: err.message
//     })
// })

// let PORT = 5300

// app.listen(5300, ()=>{
//     console.log(`Server running on port ${PORT} ...`);
// })
// =======

import cors from "cors";
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
app.use(function (req: Request, res: Response, next: NextFunction) {
  res.header("Access-Control-Allow-Origin", "*")

  next()
})
// app.use(cors( ));

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
