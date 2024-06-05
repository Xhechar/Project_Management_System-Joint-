import express, { NextFunction, Request, Response, json } from 'express'
import user_router from './router/user.router'

const app = express()

app.use(json())
app.use('/us', user_router)

app.use((err:Error, req: Request, res:Response, next:NextFunction)=>{
    res.json({
        message: err.message
    })
})

let PORT = 5300

app.listen(5300, ()=>{
    console.log(`server running on port ${PORT}...`);
})