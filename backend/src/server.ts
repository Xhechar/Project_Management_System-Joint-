<<<<<<< HEAD
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
=======
import express, { NextFunction, Request, Response, json } from "express";
import cors from 'cors'
import user_router from "./routers/user.router";
import auth_router from "./routers/auth.router"; // Import the auth router
>>>>>>> ae6986303ee97f25759e61fa14413340fc907d5a

const app = express();
app.use(json());
<<<<<<< HEAD
app.use(function (req: Request, res: Response, next: NextFunction) {
  res.header("Access-Control-Allow-Origin", "*")

  next()
})
// app.use(cors( ));

app.use("/projects", my_route);
=======
app.use(cors())
>>>>>>> ae6986303ee97f25759e61fa14413340fc907d5a

// Add both user and auth routers
app.use('/users', user_router);
app.use('/auth', auth_router); // Use the auth router for authentication routes

// Add logging middleware to capture request details
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    next();
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({
        message: err.message
    });
});

const PORT = 5300;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} ...`);
});
<<<<<<< HEAD
=======


>>>>>>> ae6986303ee97f25759e61fa14413340fc907d5a
