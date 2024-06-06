import { Request, Response } from "express"
import { userService } from "../services/user.service"

let service = new userService()

export class userController {

    async createUser(req:Request, res:Response){
        try{
            let {FirstName, LastName, email, password, user_image, isAssignedProject} = req.body

            let result = await service.registerUser(req.body)

            return res.status(201).json(result)

        }catch (error) {
            return res.json({
                error
            })
        }
    }

    async fetchAll(req: Request, res: Response){
        try {
            let result = await service.fetchAllUsers()

            return res.status(201).json(result)

        }catch (error) {
            return res.json({
                error
            })
        }
    }
}

